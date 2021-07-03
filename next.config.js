const withPlugins = require('next-compose-plugins');
const rehypePrism = require('@mapbox/rehype-prism');

const mdx = require('next-mdx-enhanced')({
  defaultLayout: false,
  fileExtensions: ['mdx', 'md'],
  rehypePlugins: [rehypePrism],
});

// you may tweak other base Next options in this object
// we are using it to tell Next to also handle .md and .mdx files
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack5: false,
};

module.exports = withPlugins(
  [
    mdx,
    // you may add more plugins, and their configs, to this array
  ],
  nextConfig
);
