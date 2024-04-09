/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    UNLEASH_URL: "{YOUR_UNLEASH_URL}",
    CLIENT_KEY: "{YOUR_CLIENT_KEY}",
  },
};

module.exports = nextConfig;
