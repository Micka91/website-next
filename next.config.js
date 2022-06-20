/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
};

module.exports = nextConfig;
