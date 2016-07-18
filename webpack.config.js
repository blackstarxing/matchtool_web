var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './static'),
    publicPath: '/static/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader","css-loader") 
      },
    ]
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-runtime'],
    comments: false
  },
  plugins: [
      new ExtractTextPlugin('./index.css', {
            allChunks: true
        }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('./index.css', {
            allChunks: true
        }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devServer={
     historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    proxy: {
      '/event/*': {
          target: 'http://192.168.30.248:8088',
          secure: false
      }
    }
  },
  module.exports.devtool = '#eval-source-map'
}
