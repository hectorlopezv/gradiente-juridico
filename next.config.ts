import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "https://wa.me/573059451119",
        permanent: true,
      },
      {
        source: "/practica/asesoramiento-estrategico",
        destination: "/practica",
        permanent: true,
      },
      {
        source: "/equipo/camila-restrepo",
        destination: "/equipo",
        permanent: true,
      },
      {
        source: "/equipo/andres-mejia",
        destination: "/equipo",
        permanent: true,
      },
      {
        source: "/keystatic",
        destination: "/admin/index.html",
        permanent: false,
      },
      {
        source: "/keystatic/:path*",
        destination: "/admin/index.html",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/admin", destination: "/admin/index.html" },
    ];
  },
};

export default nextConfig;
