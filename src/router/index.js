import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "views/about/About";
import Home from "views/home/Home";
import Write from "views/write/Write";
import Login from "views/login/Login";
import Mine from "views/mine/Mine";
import FMessage from "views/msg/FMessage";
import Essay from "../views/essay/Essay";
import Setting from "../views/setting/Setting";
import Test from "../views/Test";
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home',
     
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
     
    },
    {
      path: '/write',
      name: 'Write',
      component: Write,
    
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Login',
      component: Login
    },
    {
      path: '/mine/:id',
      name: 'Mine',
      component: Mine,
    
    },
    {
      path: '/mine/o/:id',
      name: 'Mine',
      component: Mine,
     
    },
    {
      path: '/message',
      name: 'FMessage',
      component: FMessage,
      
    },
    {
      path: '/essay/:id',
      name: 'Essay',
      component: Essay,
     
    },
  
    {
      path: '/setting/:id',
      name: 'Setting',
      component: Setting,
    
    },
  
    {
      path: '/test/',
      name: 'Test',
      component: Test,
    
    }



  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
