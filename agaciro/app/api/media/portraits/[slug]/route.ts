import { largePortraitSources } from "@/content/media";

export const runtime = "nodejs";
export const maxDuration = 60;
const MAX_BYTES = 16 * 1024 * 1024;

/** Fixed catalog slugs only: never an arbitrary URL proxy. No source files on disk. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const src = Object.hasOwn(largePortraitSources, slug) ? largePortraitSources[slug] : undefined;
  if (!src) return new Response("Unknown portrait", { status: 404 });

  try {
    const upstream = await fetch(src, {
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(45000),
    });
    if (!upstream.ok || !upstream.headers.get("content-type")?.startsWith("image/")) {
      return new Response("Portrait unavailable", { status: 502 });
    }
    const reader = upstream.body?.getReader();
    if (!reader) return new Response("Portrait unavailable", { status: 502 });
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BYTES) {
        await reader.cancel();
        return new Response("Portrait exceeds size limit", { status: 502 });
      }
      chunks.push(value);
    }
    return new Response(Buffer.concat(chunks), {
      headers: {
        "Content-Type": upstream.headers.get("content-type")!,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Portrait unavailable", { status: 502 });
  }
}
