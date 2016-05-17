var path = require('path')
var alias = require('./alias')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'weex.dev.entry.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'weex.js',
    library: 'Vue',
    libraryTarget: 'commonjs'
  },
  resolve: {
    alias: Object.assign({}, alias, {
      // entities: './entity-decoder'
    })
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devtool: '#source-map'
}
