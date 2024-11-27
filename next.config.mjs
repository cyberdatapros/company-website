/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/#about-us",
        permanent: true,
      },
      {
        source: "/our-services/:path*",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-blog",
        destination: "/blogs?page=1",
        permanent: true,
      },
      {
        source: "/our-blog/:path*",
        destination: "/blogs?page=1",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blogs?page=1",
        permanent: true,
      },
      {
        source: "/services/compliance/hipaa",
        destination: "/#services",
        permanent: true
      },
      {source: "/services/compliance/pci",
        destination: "/#services",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.giphy.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
