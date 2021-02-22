import { createRouter, createWebHistory } from "vue-router";

//懒加载
const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')

const routes = [

  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/category",
    name: "category",
    component: Category
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
