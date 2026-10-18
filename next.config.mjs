/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Vicman',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
