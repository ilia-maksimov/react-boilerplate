const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    proxy: { 
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false, 
        logLevel: 'debug' 
      },
      '/callback/**': {
        target: 'http://localhost:3000',
        secure: false, 
        logLevel: 'debug'
      }
    },
    historyApiFallback: true,
  },
});