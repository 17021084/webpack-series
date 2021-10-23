const path = require("path");

module.exports = {
  mode: "development",

  //source root js
  entry: "./src/index.js",
  //destination file will build  
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // nó sẽ refer tơi .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },

  //This option controls if and how source maps are generated.
  devtool: "source-map",

  // hot reload server
  devServer: {
    // Content base nó bị outdate rồi dùng cái static
    // contentBase: "./dist",
    // static: "./dist",
    static: "./public",
    compress: true, // nen
    port: 9000, // port mà hot reload server định chạy
  },
};
