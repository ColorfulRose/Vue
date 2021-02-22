
import  {flag,sum} from "./aaa.js"
if(flag){
  console.log('xiaominghahaha')
}
import  {num1,height} from "./aaa.js"
console.log(num1,height)

//导入函数
import {mul} from "./aaa.js"
console.log(mul(80,80))

import {Person} from "./aaa.js"
const  person= new Person();
person.run()

//导入的东西可以自己命名
import addr from "./aaa.js"
console.log(addr)


//导入的东西多时
import * as aaa from  "./aaa.js"
console.log(aaa.flag)

