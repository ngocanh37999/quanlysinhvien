/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true
  reactStrictMode: false,
  swcMinify: true,
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig
