module.exports = {
  outputDir: 'docs',
  baseUrl: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
    //whb:如果想更改研发端口
    /*devServer: {
        port: 5999
    }*/
    //whb:如果想更改webpack配置
    /*configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map'
            // mutate config for production...
        }
    }*/
};
