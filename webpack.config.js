const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

const pkgDependencies = Object.keys(pkg.dependencies);
const LIB_NAMES = ['api', 'path']; 
const PATHS = {
  index: path.join(__dirname, 'src', 'index'),
  apiLib: path.join(__dirname, 'src', 'api'),
  pathLib: path.join(__dirname, 'src', 'path'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: {
    index: PATHS.index,
    api: PATHS.apiLib,
    path: PATHS.pathLib
  },
  externals: LIB_NAMES.concat(pkgDependencies),
  output: {
      path: PATHS.dist,
      filename: '[name].js',
      libraryTarget: 'commonjs2',
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         chunks: "initial",
  //         minChunks: 2,
  //         maxInitialRequests: 5, // The default limit is too small to showcase the effect
  //         minSize: 0 // This is example is too small to create commons chunks
  //       },
  //       vendor: {
  //         test: /node_modules/,
  //         chunks: "initial",
  //         name: "vendor",
  //         priority: 10,
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'package.json'),
        to: path.join(__dirname, 'dist'),
        transform: function(content) {
          var data = JSON.parse(content.toString());
          var result = {
            name: data.name,
            version: data.version,
            peerDependencies: data.peerDependencies
          };
          return new Buffer(JSON.stringify(result));
        }
      }
    ])
  ]
};