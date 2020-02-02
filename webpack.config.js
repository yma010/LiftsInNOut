const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/lifts_in_n_out.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      test: /\.svg?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        loader: 'svg-inline-loader?classPrefix',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
