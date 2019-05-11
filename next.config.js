const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withPlugins([[withMDX], [withImages], [withCSS]], {
  env: {
    GA_ID: 'UA-78828365-7'
  },
  pageExtensions: ['js', 'jsx', 'mdx']
});
