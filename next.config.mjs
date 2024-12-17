/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = "production";

const nextConfig = {
  basePath: isProd ? '/fotochkitest' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;