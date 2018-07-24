const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill','./src/client/app/index'],
	resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json', '.css', '.scss' ]
	},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
				use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')({ addDependencyTo: webpack }),
                require('postcss-url')(),
                require('postcss-cssnext')(),
                require('postcss-reporter')()
              ]
            }
          }
        ]
      },
			{
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            query: {
              modules: true,
              importLoaders: 1,
              camelCase: true,
              namedExport: true,
              localIdentName: '[local]__[hash:base64:5]'
            }
          },
          'sass-loader']
      },
			{
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                    name: '[hash].[ext]'
                }
            }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      title: 'RB',
      template: './src/client/index.html'
    }),
		new webpack.NamedModulesPlugin(),
		new webpack.WatchIgnorePlugin([/\.scss\.d\.ts$/])
	],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
	},
};
