const app = new Vue({
  el: '#app',
  data: {
    books: [{
        id: 1,
        name: '计算机导论',
        date: '2015-9',
        price: 44.0,
        count: 1
      },
      {
        id: 2,
        name: 'C++入门',
        date: '2016-9',
        price: 55.00,
        count: 1
      },
      {
        id: 3,
        name: 'python入门',
        date: '2017-9',
        price: 66.0,
        count: 1
      },
      {
        id: 4,
        name: 'js入门',
        date  : '2018-9',
        price: 39.0,
        count: 1
      }
    ],
    // tallprice:204
  },
 // 计算总价方法一 添加tallprice 方法2  添加计算属性
 computed:{
   totalprice(){
     //let finalprice =0;
     //1
   //   for(let i=0;i<this.books.length;i++){
   //     finalprice += this.books[i].price*this.books[i].count;
   //   }
   //   return finalprice;
   // }
   
   //第2种方法
        // for(i in books){
        //   finalprice += this.books[i].price*this.books[i].count;
        // }
        // return finalprice;
        
   //3
        // for(let item of this.books){
        //   finalprice += item.price*item.count;
        // }
        // return finalprice;
        return this.books.reduce(function(prevalue,book){
           return prevalue+book.price*book.count;
        },0)
   }
   },
  methods:{
    getFinalprice(price){
      return ('¥'+price.toFixed(2));
    },
    increment(index){
      // this.tallprice += this.books[index].price;
      this.books[index].count++;
    },
    decrement(index){
     // this.tallprice -= this.books[index].price;
     this.books[index].count--;
    },
    removebook(index){
       // this.tallprice -= this.books[index].price*this.books[index].count;
      this.books.splice(index,1);
    }
  },
  filters:{
    showPrice(price){
       return ('¥'+price.toFixed(2));
    }
  }
})
