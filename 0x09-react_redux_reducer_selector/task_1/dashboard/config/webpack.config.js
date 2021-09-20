// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
			{
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        loader: 'image-webpack-loader',
      },
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8564,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
			template: './dist/index.html',
      title: 'Holberton Dashboard',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'development'
};