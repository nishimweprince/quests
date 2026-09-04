import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import ts from "typescript";
import { loadCatalog } from "./media-catalog.mjs";

const imageFile = /\.(?:avif|bmp|gif|heic|ico|jpe?g|jxl|png|svg|tiff?|webp)$/i;
const ignored = new Set(["node_modules", ".git", ".next", "out", "build", "coverage", ".cache", "test-results", "playwright-report"]);

export async function inspectProject(root) {
  const errors = [];
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (entry.isSymbolicLink()) continue;
      const file = path.join(dir, entry.name);
      const relative = path.relative(root, file);
      if (entry.isDirectory()) {
        if (!ignored.has(entry.name)) await walk(file);
        continue;
      }
      if (imageFile.test(entry.name)) errors.push(`${relative}: local image file`);
      if (/\.(?:[cm]?[jt]sx?|css|html|json)$/.test(entry.name)) {
        const source = await readFile(file, "utf8");
        if (/\.(?:[cm]?[jt]sx?)$/.test(entry.name)) {
          const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
          function visit(node) {
            if (ts.isStringLiteralLike(node)) {
              const value = node.text.split(/[?#]/)[0];
              const local = !/^(?:https?:)?\/\//.test(value);
              const image = imageFile.test(value);
              const importPath = ts.isImportDeclaration(node.parent) || ts.isExportDeclaration(node.parent);
              const srcAttribute = ts.isJsxAttribute(node.parent) && node.parent.name.getText(ast) === "src";
              if (local && ((image && (/^(?:\/|\.\.?\/)/.test(value) || importPath || srcAttribute)) || /^data:image\//.test(value))) {
                errors.push(`${relative}: local/embedded image reference ${node.text}`);
              }
              if (/^\/(?:media|brand)(?:\/|$)/.test(value)) errors.push(`${relative}: legacy local media root ${value}`);
            }
            ts.forEachChild(node, visit);
          }
          visit(ast);
        } else {
          for (const match of source.matchAll(/(?:url\(\s*|(?:src|href)=["']|["'])([^\s"'()<>]+\.(?:avif|bmp|gif|ico|jpe?g|png|svg|webp))(?:[?#][^\s"'()]*)?/gi)) {
            if (!/^(?:https?:)?\/\//.test(match[1])) errors.push(`${relative}: local image reference ${match[1]}`);
          }
          if (/data:image\//.test(source)) errors.push(`${relative}: embedded image data`);
        }
      }
    }
  }
  await walk(root);
  return errors;
}

async function main() {
  const root = fileURLToPath(new URL("../", import.meta.url));
  const errors = await inspectProject(root);
  const { mediaSources, mediaPlacements } = await loadCatalog();
  for (const [placement, src] of Object.entries(mediaPlacements)) {
    if (!mediaSources[src]) errors.push(`${placement}: missing provenance`);
  }
  for (const [src, source] of Object.entries(mediaSources)) {
    const url = new URL(src);
    if (url.protocol !== "https:" || url.search || url.hash) errors.push(`${src}: expected stable HTTPS image URL without query/fragment`);
    if (!source.credit || !source.reuse || !source.description || !source.sourcePage.startsWith("https://")) errors.push(`${src}: incomplete provenance`);
    if (!Object.values(mediaPlacements).includes(src)) errors.push(`${src}: unused catalog asset`);
  }
  if (errors.length) throw new Error(errors.join("\n"));
  console.log(`Media policy passed: ${Object.keys(mediaPlacements).length} placements, ${Object.keys(mediaSources).length} remote assets, no local images.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
