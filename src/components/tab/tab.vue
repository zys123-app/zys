<template>
    <div id="tab">
        <ul :style="{
            flexDirection: dir
        }">
            <li v-for="(item, index) in tabs" :key="index" @click="pageChange(item.url)">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        tabs: {
            type: Array,
            default: () => {
                return []
            }
        },

        dir: {
            type: String,
            default: 'row'
        }
    },
    data() { 
        return {

        }
    },
    created() {

    },
    methods:{
        pageChange(url) {
            this.$router.push(url)
        }
    },
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
//   flex-direction: column;
  justify-content: space-around;
  width: 100%;
  font-size: .28rem;
  align-items: center;
  li{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
}
</style>