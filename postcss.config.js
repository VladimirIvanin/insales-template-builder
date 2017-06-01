var syntax = require('postcss-scss');
var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 20 versions'],
      cascade: false
    })
  ],
  parser: syntax,
  map: false,
  syntax: "postcss-scss"
}
