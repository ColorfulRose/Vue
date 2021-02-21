//防抖动函数 让图片加载delay秒就refresh一次
export function debounce(func,delay){
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}