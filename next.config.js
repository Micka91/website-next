/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
  // target: "experimental-serverless-trace",
  // webpack5: true,
  // webpack: (config) => {
  //   // Fixes npm packages that depend on `fs` module
  //   config.resolve.fallback = { fs: false };

  //   return config;
  // },
  // i18n: {
  //   locales: ["en", "fr"],
  //   defaultLocale: "fr",
  // },
};

module.exports = nextConfig;
