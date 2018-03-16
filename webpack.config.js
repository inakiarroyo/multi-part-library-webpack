const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const fs = require('fs');
const path = require('path');

const node_modules = fs.readdirSync('node_modules').filter((x) => (x !== '.bin'));

// const pck = require('./package.json');

module.exports = {
    entry: {
      index: path.join(__dirname, "src", "index"),
      api: path.join(__dirname, "src", "api"),
      path: path.join(__dirname, "src", "path"),
    },
    externals: node_modules,
    output: {
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
    //         name: "commons",
    //         chunks: "initial",
    //         minChunks: 2,
    //         minSize: 0
    //       }
    //     }
    //   },
    //   occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
    // }
    // plugins: [
    //     CopyWebpackPlugin
    //   ]


  plugins: [
    // new HtmlWebpackPlugin({
    //       template: path.join(__dirname, "src", "index.html")
    //     }),
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