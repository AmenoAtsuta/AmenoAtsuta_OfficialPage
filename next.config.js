/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ["yt3.ggpht.com"],
  },
}

module.exports = nextConfig
