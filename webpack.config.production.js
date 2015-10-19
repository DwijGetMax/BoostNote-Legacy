var webpack = require('webpack')
module.exports = {
  devtool: 'source-map',
  entry: {
    main: './browser/main/index.js'
  },
  output: {
    path: 'compiled',
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: 'http://localhost:8090/assets',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.styl?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BABEL_ENV': JSON.stringify('production')
      }
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // })
  ],
  externals: [
    'socket.io-client',
    'md5',
    'superagent',
    'superagent-promise',
    // 'react',
    // 'redux',
    // 'react-redux',
    // 'react-router',
    'lodash',
    // 'redbox-react',
    // 'react-transform-hmr',
    // 'react-transform-catch-errors',
    // 'redux-devtools',
    // 'redux-devtools/lib/react',
    // 'react-select',
    'markdown-it',
    'moment',
    'fs',
    'path'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', 'styl']
  },
  target: 'atom'
}