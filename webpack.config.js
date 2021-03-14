const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].[hash].js',
    //     publicPath: '/',
    //   },
    module: {
        rules: [
            {
              test: /\.m?(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
              test: /\.(jpg|svg|png|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]',
                    publicPath: '/',
                  },
                },
              ],
            },
          ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json']
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'MMES React Projects',
            filename: 'index.html',
            template: './public/index.html',
        }),
        new MiniCSSExtractPlugin({
            filename: "index.scss",
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 9009,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
}
