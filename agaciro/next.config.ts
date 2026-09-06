import type { NextConfig } from "next";
import { mediaSources } from "./src/content/media";

// Next.js allows at most 50 patterns. Group the official logo/board folders and
// the Pexels photo library; other assets retain exact paths.
// No arbitrary hosts or query strings are allowed.
const patterns = Object.keys(mediaSources).map((src) => {
  const url = new URL(src);
  const directory = url.hostname === "www.agaciro.rw"
    ? ["/fileadmin/user_upload/logos/", "/fileadmin/user_upload/Board_of_directors/"]
      .find((prefix) => url.pathname.startsWith(prefix))
    : undefined;
  // Pexels photo URLs nest two segments deep (/photos/{id}/{file}); Next.js
  // single-segment "*" would not match them, so this library uses "**".
  const pexelsLibrary = url.hostname === "images.pexels.com" && url.pathname.startsWith("/photos/");
  return {
    protocol: "https" as const,
    hostname: url.hostname,
    port: "",
    pathname: pexelsLibrary ? "/photos/**" : directory ? `${directory}*` : url.pathname,
    search: "",
  };
});

const nextConfig: NextConfig = {
  images: {
    localPatterns: [{ pathname: "/api/media/portraits/*", search: "" }],
    remotePatterns: [...new Map(patterns.map((pattern) =>
      [`${pattern.hostname}${pattern.pathname}`, pattern],
    )).values()],
  },
};

export default nextConfig;
