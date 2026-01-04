import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => ([{ source: "/", destination: "https://www.youtube.com/watch?v=paaKAlx8plk", permanent: true }])
};

export default nextConfig;
