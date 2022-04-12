const path = require('path');

module.exports = {
  swSrc: path.join(__dirname, 'serviceWorker.js'),
  swDest: path.join(__dirname, 'dist', 'sw.js'),
  globPatterns: ['**/*.{js,css,html,webp}'],
  globDirectory: path.join(__dirname, 'dist'),
};
