/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:["fakestoreapi.com", "cdn.shopify.com", "api.lorem.space"]
  }
}

module.exports = nextConfig
