<template>
    <div id="swiper">
        <ul @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="{
            width: pics.length*100 + '%',
            left: left,
            transition: transition
        }">
            <li v-for="item in pics" :key="item.id" :style="{
                width: (100 / pics.length) + '%'
            }">
                <img :src="item.picUrl" alt="banner">
            </li>
        </ul>
    </div>
</template>

<script>
var timer1, timer2;
export default {
    name: 'swiper',
    props: {
        pics: {
            type: Array,
            default: () => {
                return []
            }
        },

        autoplay: {
            required: false,
            default: false
        }
    },
    data() { 
        return {
            startX: 0, // 记录触摸初始位置
            dir: 'left', // 记录手指滑动的方向
            left: '-100%', // 定义录播图的盒子距离左边的距离
            transition: 'none'
        }
    },
    created() {
        if(this.autoplay !== false) {
            setInterval(() => {
                this.touchEnd()
            }, 3000)
        }
        
    },
    methods:{
        touchStart(e) {
            // console.log(e)
            this.startX = e.touches[0].pageX
        },
        // 手指滑动是判断轮播的方向
        touchMove(e) {
            if(e.touches[0].pageX - this.startX > 0) {
                this.dir = "right"
            } else {
                this.dir = 'left'
            }
        },

        touchEnd() {
            this.transition = 'left 0.5s linear'
            if(this.dir === 'left') {
                clearTimeout(timer1)
                this.left = '-200%'
                timer1 = setTimeout(() => {
                    this.transition = 'none'
                    this.left = '-100%'
                    let item = this.pics.shift()
                    this.pics.push(item)
                }, 500)
            } else if(this.dir === 'right') {
                this.left = '0%'
                clearTimeout(timer2)
                timer2 = setTimeout(() => {
                    this.transition = 'none'
                    this.left = '-100%'
                    let item = this.pics.pop()
                    this.pics.unshift(item)
                }, 500)
            }
        }
    },
}
</script>

<style scoped lang="scss">
    #swiper {
        width: 100%;
        overflow: hidden;
        position: relative;
        height: 7.46rem;
        ul{
            display: flex;
            position: absolute;
            top: 0;
            li {
                img{
                    width: 100%;
                }
            }
        }
    }
</style>