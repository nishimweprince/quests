import sharp from "sharp";
import { loadCatalog } from "./media-catalog.mjs";

const { mediaSources, brandMedia } = await loadCatalog();
const base = process.argv.find((arg) => arg.startsWith("--base-url="))?.split("=").slice(1).join("=");
const queue = Object.values(mediaSources);
const errors = [];
let passed = 0;

async function verify(source) {
  const url = base && source.src !== brandMedia.favicon
    ? `${base}/_next/image?url=${encodeURIComponent(source.src)}&w=640&q=75`
    : source.src;
  const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  if (!response.headers.get("content-type")?.startsWith("image/")) throw new Error("Response is not an image");
  const bytes = Buffer.from(await response.arrayBuffer());
  if (source.src === brandMedia.favicon) {
    // libvips does not decode ICO. Validate its directory; browser QA covers decoding.
    if (bytes.length < 22 || bytes.readUInt16LE(0) !== 0 || bytes.readUInt16LE(2) !== 1) throw new Error("Invalid ICO header");
    const count = bytes.readUInt16LE(4);
    if (!count || bytes.length < 6 + count * 16) throw new Error("Invalid ICO directory");
    for (let index = 0; index < count; index++) {
      const offset = 6 + index * 16;
      const size = bytes.readUInt32LE(offset + 8);
      const start = bytes.readUInt32LE(offset + 12);
      if (!size || start < 6 + count * 16 || start + size > bytes.length) throw new Error("Invalid ICO image entry");
    }
  } else {
    await sharp(bytes).rotate().raw().toBuffer();
  }
}

await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const source = queue.shift();
    try {
      await verify(source);
      passed++;
    } catch (error) {
      errors.push(`${source.src}: ${error.message}`);
    }
  }
}));
console.log(`${passed}/${Object.keys(mediaSources).length} ${base ? "optimized" : "source"} images verified.`);
if (errors.length) { console.error(errors.join("\n")); process.exitCode = 1; }
