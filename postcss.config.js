const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer],
  autoprefixer: autoprefixer({ browsers: ['last 2 versions'] })
};
