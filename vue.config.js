module.exports = {
  outputDir: 'docs',
  //whb:此处的vant-demo规定了生产环境的根目录前缀，非常重要（此时vant-demo作为纯静态网站可以直接放到TomcatWebapp目录下）
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
