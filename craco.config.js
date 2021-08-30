const path = require("path");

const {
  addBeforeLoaders,
  loaderByName,
  removeLoaders
} = require('@craco/craco')

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    },
    configure: (webpackConfig, {
      env,
      paths
    }) => {
      //移除旧的url-loader
      removeLoaders(webpackConfig, loaderByName('url-loader'))
      const urlWebpackLoader = {
        test: /\.(eot|woff2?|ttf|svg)$/,
        exclude: resolve(__dirname, "src/asstes/font"), //不处理指定svg的文件(所有使用的svg文件放到该文件夹下)
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name]-[hash:5].min.[ext]',
            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
            outputPath: 'font',
            publicPath: 'font'
          }
        }]
      }
      const svgWebpackLoader = {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: resolve(__dirname, 'src/asstes/font'), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
        options: {
          symbolId: 'icon-[name]' //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
        }
      }
      // 在file-loader之前 添加svg-sprite-loader
      addBeforeLoaders(
        webpackConfig,
        loaderByName('file-loader'),
        svgWebpackLoader
      )

      // 在svg-sprite-loader之前  添加新的url-loader
      addBeforeLoaders(
        webpackConfig,
        loaderByName('svg-sprite-loader'),
        urlWebpackLoader
      )

      return webpackConfig
    }
  }
}
