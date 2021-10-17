module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://services.odata.org",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
