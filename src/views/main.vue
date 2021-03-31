<template>
  <div id="main">
    <router-view class="contentBox"></router-view>
    <tab :tabs="tabs" dir="row"></tab>
  </div>
    
</template>

<script>
import tab from '@/components/tab/tab'
export default {
  name: '',
  components: {
    tab
  },
  data() { 
    return {
      tabs: [
        {
          title: '首页',
          url: '/index'
        },
        {
          title: '分类',
          url: '/type'
        },
        {
          title: '购物车'
        },
        {
          title: '我的'
        }
      ]
    }
  },
  created() {

  },
  methods:{

  },
 }
</script>

<style scoped lang="scss">
#main {
  height: 100%;
}
.contentBox {
  height: calc(100% - 1rem);
}

</style>