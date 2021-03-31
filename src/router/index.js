import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRoutes from '../views/home/router'
import Main from '../views/main'
// import 不带底部导航的页面路由集合 from '地址'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Main,
    name: 'Main',
    redirect: '/index',
    children: [
      ...HomeRoutes
    ]
  }
]
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  // console.log(location)
  if(typeof(location)=="string"){
    var Separator = "&";
    if(location.indexOf('?')==-1) { Separator='?'; }
    location = location + Separator + "random=" + new Date().getTime();
  }
  return routerPush.call(this, location).catch(error=> error)
}
 

const router = new VueRouter({
  routes
})

export default router
