//使用commonJs的模块化规范 
const {mul, add} = require('./mathUtils.js');

console.log(add(20,80));
console.log(mul(20,8));

//ES6 的模块化规范
import{name,age,height} from './info.js'
console.log(name,age,height)