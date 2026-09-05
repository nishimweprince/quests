import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";
import { loadCatalog } from "./media-catalog.mjs";

const { largePortraitSources } = await loadCatalog();
const source = (await readFile(new URL("../app/api/media/portraits/[slug]/route.ts", import.meta.url), "utf8"))
  .replace('import { largePortraitSources } from "@/content/media";', `const largePortraitSources = ${JSON.stringify(largePortraitSources)};`);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { GET } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const invoke = (slug) => GET(new Request(`http://localhost/api/media/portraits/${slug}`), { params: Promise.resolve({ slug }) });

test("unknown slugs and prototype keys cannot fetch upstream URLs", async (t) => {
  t.mock.method(globalThis, "fetch", () => { throw new Error("must not fetch"); });
  for (const slug of ["unknown", "constructor", "__proto__", "https://example.com"]) {
    assert.equal((await invoke(slug)).status, 404);
  }
  assert.equal(fetch.mock.callCount(), 0);
});

test("known portraits fetch only the catalog URL and return cacheable bytes", async (t) => {
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, largePortraitSources["ulrich-kayinamura"]);
    assert.equal(options.redirect, "error");
    assert.equal(options.cache, "no-store");
    assert.ok(options.signal instanceof AbortSignal);
    return new Response(new Uint8Array([1, 2, 3]), { headers: { "Content-Type": "image/png" } });
  });
  const response = await invoke("ulrich-kayinamura");
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "image/png");
  assert.match(response.headers.get("cache-control"), /max-age=86400/);
  assert.deepEqual([...new Uint8Array(await response.arrayBuffer())], [1, 2, 3]);
});

test("upstream failures, non-images, and oversized bodies fail without caching", async (t) => {
  const cases = [
    () => { throw new Error("upstream timeout or redirect"); },
    () => new Response("not found", { status: 404 }),
    () => new Response("HTML error", { headers: { "Content-Type": "text/html" } }),
    () => new Response(new Uint8Array(16 * 1024 * 1024 + 1), { headers: { "Content-Type": "image/png" } }),
  ];
  for (const mock of cases) {
    const fetchMock = t.mock.method(globalThis, "fetch", mock);
    const response = await invoke("ulrich-kayinamura");
    assert.equal(response.status, 502);
    assert.equal(response.headers.get("cache-control"), null);
    fetchMock.mock.restore();
  }
});
