import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "https://wa.me/573059451119",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
