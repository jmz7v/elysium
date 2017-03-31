import path from 'path'
import webpack from 'webpack'
import WebpackNotifierPlugin from 'webpack-notifier'

// App config
const APP_NAME = 'Elysium'


// Config
let config = {
  context: path.join(__dirname, 'src'),
  debug: true,
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build/public/js'),
    publicPath: 'public/js',
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'public',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000'
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ]
}

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'APP_NAME': JSON.stringify(APP_NAME)
    }
  })
]

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
  config.devServer = {}
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}

export default config
