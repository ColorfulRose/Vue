//使用commonJs的模块化规范 
const {mul, add} = require('./js/mathUtils');

console.log(add(20,80));
console.log(mul(20,8));

//ES6 的模块化规范
import{name,age,height} from './js/info'
console.log(name,age,height)
//依赖css
require('./css/normal.css')
//依赖less文件
require('./css/special.less')
document.writeln('<h2>你好,加油</h2>')

//使用vue进行开发
import Vue from 'vue'
// runtime-only 代码中,不可以有任何的template
//runtime-compiller 代码中,可以有template,因为有compiller可以用于编译template

//抽取简化 弄一个组件
const App = {
  template: `
    <div>
        <h2>{{message}}</h2>
        <h2>{{name}}</h2>
    </div>
    `,
  data(){
    return{
    message: '你好',
    name: 'wang'
  }}
}
new Vue({
    el: '#app',
    /*template: `
    <div>
        <h2>{{message}}</h2>
        <h2>{{name}}</h2>
    </div>
    `,
    data:{
        message: '你好',
        name: 'wang'
    }*/
  template: '<app></app>',
  components:{
    App
  }
})