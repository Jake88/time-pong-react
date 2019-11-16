const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // Not sure why we need this, but we do?
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.mp3$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      }
    ]
  },
  // This gives us non-relative paths for our import statements
  resolve: {
    modules: [
      path.resolve(__dirname, 'src/app'),
      'node_modules'
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
