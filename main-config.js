const path = require('path');

module.exports = {
  pathes: {
    src: path.resolve(__dirname, './src'), // context path
    dist: path.resolve(__dirname, './dist'),
    images: './images',
    fonts: './fonts',
  },
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  staticFiles: [],
  fileStructure: [
    {
      html: {path: './index.html'},
      css: [
        {path: './style.scss'},
      ],
      js: [
        {path: './index.js'},
      ],
    },
  ],
};
