module.exports = {
  mode: "development",
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
    static :"./dist",
    compress: true,
    port: 9000, // port mà hot reload server định chạy 
  },
};
