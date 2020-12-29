const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'minesweeperjs-solver.js',
    library: 'minesweeperjs-solver',
    libraryTarget: 'umd'
  },
  target: 'node'
};
