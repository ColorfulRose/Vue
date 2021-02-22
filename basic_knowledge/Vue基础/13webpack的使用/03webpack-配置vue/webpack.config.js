const path = require('path')

module.exports = {
  entry: './src/books.js',
  output: {
    //动态获取路径
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    //使图片正常显示打包以后图片也被打包了
    publicPath:'dist/'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        //style-loader 负责将样式添加到DOM中
        //使用多个loader时,从右向左读
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "less-loader", options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //d当时加载的图片大于limit,需要使用file-floader
              limit: 16000,
              //让图片命名时用自己的名加上8位hash值,打包在img中
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        //排出 ES6转换成ES5 只转化src里面的
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }


    ]
  },
  resolve: {
    //alias 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}