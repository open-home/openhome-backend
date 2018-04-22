'use strict';

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    lifxService: './src/services/lifx/index.ts',
  },
  output: {
    filename: './dist/[name]-service.js',
    libraryTarget: 'this'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: [nodeExternals()]
};
