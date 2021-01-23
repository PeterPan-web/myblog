import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import("views/home/Home")
const About = () => import("views/about/About")
const Books = () => import("views/books/Books")
const Guestbook = () => import("views/guestbook/Guestbook")
const Details = () => import("views/details/Details")
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: "/home"
  },{
    path: '/home',
    component: Home
  },{
    path: '/books',
    component: Books
  },
  {
    path: '/about',
    component: About
  },{
    path: '/guestbook',
    component: Guestbook
  },{
    path: '/details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)}

export default router
