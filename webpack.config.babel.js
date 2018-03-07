// Libraries
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import 'babel-polyfill'

let config = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'index.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    alias: {
      shared: path.resolve(__dirname, 'src/shared/'),
      views: path.resolve(__dirname, 'src/views/'),
      public: path.resolve(__dirname, 'src/public/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}

export default config
