module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i, // doc them ve regex
        use: ["style-loader","css-loader"],
      },
    ],
  },
};
