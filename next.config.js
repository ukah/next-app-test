/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig
module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/next-app-test",
  trailingSlash: true,
};
