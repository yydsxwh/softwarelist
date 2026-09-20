import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @yydsxwh/shared 装在 node_modules，但同样直接发布 TS 源码，一并转译。
  transpilePackages: [
    "@yydsxwh/shared",
    "@andyyyds/shared",
    "@andyyyds/courses",
    "@andyyyds/mathcode",
    "@andyyyds/docs",
  ],
  experimental: {
    serverActions: {
      bodySizeLimit: "2048mb",
    },
    proxyClientMaxBodySize: "2048mb",
  },
};

export default nextConfig;
