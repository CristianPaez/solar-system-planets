import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/planets",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
