// vue.config.js
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: "html-loader",
          exclude: /index.html/
        }
      ]
    }
  }
}