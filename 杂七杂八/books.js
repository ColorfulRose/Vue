const  app =new Vue({
  el : "#app",
  data: {
    booklist:[
      {id :1,
        name:'计算机导论',
        price:23,
        date:'2015-01',
        count:1},
      {
        id :2,
        name:'计算机网络',
        price:23,
        date:'2015-01',
        count:1
      },
      {
        id :3,
        name:'计算机网络',
        price:23,
        date:'2015-01',
        count:1
      },
      {
        id :4,
        name:'计算机网络',
        price:23,
        date:'2015-01',
        count:1
      }
    ]
  },
  computed:{
    totalPrice(){
      let totalprice = 0
      for (let i=0;i<this.booklist.length;i++){
        totalprice += this.booklist[i].price * this.booklist[i].count
        
      }
      return totalprice
    }
  },
  methods:{
    getFinalprice(price) {
      return "¥"+price.toFixed(2);
    },
    increament(index){
      this.booklist[index].count++
    },
    decreament(index){
     this.booklist[index].count--
    },
    remove(index){
      this.booklist.splice(index,1)
    }
  },
  filters:{
    showPrice(price) {
      return "¥"+price.toFixed(2);
    }
  }
})