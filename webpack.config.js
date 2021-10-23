const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    // rules: [
    //   {
    //     test: /\.css$/i, // doc them ve regex
    //     use: ["style-loader", "css-loader"],
    //   },
    // ],
    // rules: [
    //   {
    //     test: /\.scss$/i, // doc them ve regex
    //     use: ["style-loader", "sass-loader"],
    //   },
    // ],
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  // để debug. khi mình inspect thì nó sẽ link tới chỗ mình cần tìm 
  devtool:"source-map"
};
