var precss = require('precss')
var cssimport = require('postcss-import')
var cssnext = require('postcss-cssnext')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './index.js',
  template: './index.html',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }]
  },
  postcss: function (webpack) {
    return [
      precss,
      cssimport({
        addDependencyTo: webpack
      }),
      cssnext()
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}
