import axios from 'axios' // 导入axios
import $loading from '@/components/index'
import Vue from 'vue'
import urls from './url'
Vue.use($loading)
const server = axios.create({
    baseURL: 'https://api.it120.cc', // 配置请求的公共地址
    timeout: 5000 // 设置请求超时时间
})


// 请求拦截
server.interceptors.request.use(config => {
    var flag = urls.some(item => {
        // console.log(item, config.url)
        return item == config.url
    })
    if(flag) {
        Vue.$loading.show('拼命加载中...')
    }
    // config包含的是请求的相关信息
    // console.log(config) 
    // token 是用来规定用户权限的 token有过期时间 token是由后台生成的 一般通过登录接口返回给前端
    if(localStorage.getItem('token')) { // 判读如果本地存储中有token信息则将token信息设置在请求头中
        config.headers.token = localStorage.getItem('token')
    } 
    return config
}, err => {
    // console.log('请求发生错误了')
    Promise.reject(err)
})


// 响应拦截 当服务器响应信息后触发的拦截
server.interceptors.response.use(res => {
    Vue.$loading.hide()
    switch(res.data.code) {
        case 500: 
            alert('服务器错误')
        return;
        case 404:
            alert('资源找不到')
        return;
    }

    return res.data
}, err => {
    alert('服务器响应超时')
    Promise.reject('服务器响应超时')
})

export default server