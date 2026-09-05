import type { NextConfig } from "next";
import { mediaSources } from "./src/content/media";

// Next.js allows at most 50 patterns. Group only the official logo/board folders;
// other assets retain exact paths. No arbitrary hosts or query strings are allowed.
const patterns = Object.keys(mediaSources).map((src) => {
  const url = new URL(src);
  const directory = url.hostname === "www.agaciro.rw"
    ? ["/fileadmin/user_upload/logos/", "/fileadmin/user_upload/Board_of_directors/"]
      .find((prefix) => url.pathname.startsWith(prefix))
    : undefined;
  return {
    protocol: "https" as const,
    hostname: url.hostname,
    port: "",
    pathname: directory ? `${directory}*` : url.pathname,
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
