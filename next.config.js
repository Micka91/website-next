/** @type {import('next').NextConfig} */
const path = require("path");
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
  // target: "experimental-serverless-trace",
  i18n,
  webpack5: true,
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
