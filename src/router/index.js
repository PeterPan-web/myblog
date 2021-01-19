import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import("views/home/Home")
const About = () => import("views/about/About")
const Books = () => import("views/books/Books")
const Search = () => import("views/search/Search")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: "/home"
  },{
    path: '/home',
    component: Home
  },{
    path: '/about',
    component: About
  },{
    path: '/books',
    component: Books
  },{
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
