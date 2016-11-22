var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  name: "app",
  entry: "./main.js",
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: "script.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}
