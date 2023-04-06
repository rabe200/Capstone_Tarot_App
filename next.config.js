/** @type {import('next').NextConfig} */

// Add path
const path = require("path");

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // add alias for root (use <__dirname, "src">) if you want a subfolder
    config.resolve.alias["~"] = path.resolve(__dirname);

    return config;
  },
};

module.exports = nextConfig;
