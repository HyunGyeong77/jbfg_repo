import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/jbfg",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/utils/localImageLoader.ts",
  }
};

export default nextConfig;
