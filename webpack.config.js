const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  devtool:false,
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    static: {
        directory: path.join(__dirname, "dist")
    },
    historyApiFallback: {
      index: "./index.html",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve("src"), // 这样配置后 @ 可以指向 src 目录
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.[hash:5].html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
