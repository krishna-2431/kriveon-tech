import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,
  allowedDevOrigins: ['hypnoses-straddle-emotion.ngrok-free.dev', 'localhost:3000'],
};

export default nextConfig;
