const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const config = require('./js-control.config');

if (isProduction()) {
  console.log('Creating Production Build...');
} else {
  console.log('Creating Dev Build...');
}

module.exports = env => ({
  mode: isProduction(env) ? 'production' : undefined,
  entry: getEntry(),
  devtool: !isProduction(env) && 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  stats: 'minimal',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HTMLInlineCSSWebpackPlugin({ leaveCSSFile: true }),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // exclude: /(node_modules|bower_components)/,
        include: [path.resolve(__dirname, 'src')],
        // use: {
        //   loader: 'babel-loader',
        // },
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
});

function isProduction(env) {
  return env && env.production;
}

function getEntry() {
  const entry = {};
  entry[config.JS_CONTROL_NAME] = './src/index.js';
  // TODO typeScript stuff.
  return entry;
}
