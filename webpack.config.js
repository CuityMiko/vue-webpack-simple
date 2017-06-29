var path = require('path')
var webpack = require('webpack')
// 抽取css的第三方插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 判断是否是生产环境
var isproduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
    // 为了做代码的异步加载
    chunkFilename: '[name]_[chunkhash:8]_chunk.js'
    
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.css$/, // Only .css files
          loader: isproduction ? ExtractTextPlugin.extract("style-loader", "css-loader") : 'style-loader!css-loader'
      },
      {
          test: /\.scss$/,
          loader: isproduction ? ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") :'style-loader!css-loader!sass-loader'
      },
      // 1kb=1024b 1b=8bit   25000bit~3kb
      {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'url?limit=25000&name=images/[name].[ext]'
      },
      // {
      //     test: /\.(eot|woff|ttf|woff2|svg)$/,
      //     loader: 'url'
      // }
      {
          test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
          loader: 'file-loader'
      },
      {
          test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
          loader: 'file-loader',
          query: {
          name: '[name].[ext]?[hash]'
          }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (isproduction) {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // 可以新建多个抽离样式的文件，这样就可以有多个css文件了。
    new ExtractTextPlugin("app.css")
  ])
}
