import server from '@/utils/api/server'

// 请求首页轮播图的接口
const getBanners = async function() {
    // console.log(await server.get('/small4/banner/list'))
    let {data} = await server.get('/small4/banner/list')
    return data
}

// 请求内容列表数据
const goods = async function() {
    let { data } = await server.get('/small4/shop/goods/kanjia/list')
    return data
}
export {
    getBanners,
    goods
}