var syntax = require('postcss-scss');
var autoprefixer = require('autoprefixer');
var stylefmt = require('stylefmt');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 20 versions'],
      cascade: false
    }),
    stylefmt()
  ],
  parser: syntax,
  map: false,
  syntax: "postcss-scss"
}
