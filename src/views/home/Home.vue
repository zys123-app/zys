<template>
  <div class="home" @scroll="scroll">
    <header-icon v-show="hasHeader"></header-icon>
    <swiper :pics="list"></swiper>
    <my-button type="primary" plain>主要按钮</my-button>
    <my-button type="success" round>成功按钮</my-button>
    <!-- <my-button>警告按钮</my-button>
    <my-button>危险按钮</my-button>
    <my-button>默认按钮</my-button> -->
    <div id="div" class="content">
      <span v-for="item in msg">{{item}}</span>
    </div>
  </div>
</template>

<script>
import { getBanners, goods } from '@/utils/api/homeApi'
import swiper from '@/components/swiper/swiper'
import headerIcon from '@/components/colHeader/colHeader'
import myButton from '@/components/Button/myButton'
export default {
  name: 'Home',
  components: {
    swiper,
    headerIcon,
    myButton
  },
  data() {
    return {
      list: [],
      hasHeader: false,
      msg: ''
    }
  },
  created() {

    // this.$nextTick(() => {
    //   console.log(1)
    //   console.log(document.getElementById('div'))
    // })
    





    getBanners().then(res => {
      this.list = res
    })

    goods().then(res => {
      console.log(res)
    })

  },

  methods: {
    // 监听home组件的滚动
    scroll(e) {
      // console.log(e)
      this.hasHeader = e.target.scrollTop > 400 ? true : false
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {
    width: 100%;
    overflow: auto;
  }
  .content{
    width: 100%;
    height: 2000px;
  }
</style>
