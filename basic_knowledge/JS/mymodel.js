// function myModel() {
//   //私有属性
//   var msg = "my model"
//   function dosomething() {
//     console.log('dosomething() '+msg.toUpperCase())
//   }
//   function dootherthing() {
//     console.log('dootherthing '+msg.toLowerCase())
//   }
//   // return dosomething
//   //暴露给外部使用的方法
//   return{
//     dosomething:dosomething,
//     dootherthing:dootherthing
//   }
// }

//方法二 更好
(
  function (window) {
    //私有属性
    var msg = "my model"
    function dosomething() {
      console.log('dosomething() '+msg.toUpperCase())
    }
    function dootherthing() {
      console.log('dootherthing '+msg.toLowerCase())
    }
    // return dosomething
    //暴露给外部使用的方法
    window.myModel = {
      dosomething:dosomething,
      dootherthing:dootherthing
    }
  }
)(window)