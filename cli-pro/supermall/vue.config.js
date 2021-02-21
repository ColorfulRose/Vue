//给文件引入路径创建别名
module.exports = {
  configureWebpack:{
    resolve:{
      //alias: 别名
      alias: {
      //  '@': 'src' 已经配置了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}