let name = '小明';
let age = 18;
let flag =true;
 function sum(num1,num2){
   return num1+num2;
 }
if(flag){
  sum(20,30);
}
// 导出方式1
export{
  flag,
  sum
}
// 导出方式2 定义时直接导出
export let num1 = 1000;
export let height = 1.78;

// 3导出函数
export function mul(num11,num22){
  return num11+num22;
}
//ES6的类
export class Person{
  run(){
    console.log("运行");
  }
}
//export default
const address = "宜昌市";

// export{
//   address
// }
// export default address
//默认导出函数 default只能有一个
export default function(){
  
}
