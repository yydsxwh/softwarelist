import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
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
