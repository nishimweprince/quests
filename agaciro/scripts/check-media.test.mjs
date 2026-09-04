import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { inspectProject } from "./check-media.mjs";
import { loadCatalog } from "./media-catalog.mjs";

async function fixture(t, files) {
  const root = await mkdtemp(path.join(os.tmpdir(), "agaciro-media-policy-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [file, contents] of Object.entries(files)) {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), contents);
  }
  return inspectProject(root);
}

test("rejects image files, local JSX/imports/CSS, and embedded image data", async (t) => {
  const errors = await fixture(t, {
    "public/photo.webp": "image",
    "src/card.tsx": 'import mark from "./mark.svg"; const card = <img src="/photos/hero.jpg" />;',
    "src/root.ts": 'const root = "/media/stock";',
    "app/style.css": '.hero { background: url("../photo.png") }',
    "src/embedded.ts": 'const src = "data:image/png;base64,AA==";',
  });
  assert.equal(errors.length, 6);
});

test("allows remote images, code icons, fonts, and ignored build/dependency artifacts", async (t) => {
  const errors = await fixture(t, {
    "src/card.tsx": 'const card = <img src="https://example.com/hero.jpg" />; const icon = <svg><path d="M0 0" /></svg>;',
    "app/style.css": '@font-face { src: url("/fonts/AspektaVF.woff2") }',
    "node_modules/package/mark.svg": "image",
    ".next/cache/photo.webp": "image",
    "README.md": "Historical filename: /media/stock/hero.jpg",
  });
  assert.deepEqual(errors, []);
});

test("all named placements have stable sources and documented provenance", async () => {
  const { mediaPlacements, mediaSources, personPortraits, companyImage, companyLogo, media } = await loadCatalog();
  for (const [placement, src] of Object.entries(mediaPlacements)) {
    assert.ok(mediaSources[src], `${placement} has provenance`);
    assert.equal(new URL(src).protocol, "https:");
  }
  assert.equal(Object.keys(personPortraits).length, 25);
  assert.equal(companyLogo("unknown"), null);
  assert.equal(companyImage("unknown"), media.portfolio.hub);
});
