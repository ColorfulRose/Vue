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