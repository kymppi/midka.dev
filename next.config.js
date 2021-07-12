const withPlugins = require('next-compose-plugins');

// you may tweak other base Next options in this object
// we are using it to tell Next to also handle .md and .mdx files
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack5: true,
};

module.exports = withPlugins(
  [
    // you may add more plugins, and their configs, to this array
  ],
  nextConfig
);
