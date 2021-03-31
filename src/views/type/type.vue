<template>
    <div id="type">
        <!-- 
            v-model 在input框中是由 v-bind和 @input事件的组合
            v-model 在 select标签中是由 v-bind和@change事件的组合
         -->
        <div>
            <my-input type="text" v-model="content" placeholder="请输入搜索内容"></my-input>
        </div>
        <div class="content">
            <div class="left">
                <tab :tabs="tabs" dir="column"></tab>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
import tab from '@/components/tab/tab'
import myInput from '@/components/Input/myInput'
export default {
    name: '',
    components: {
        tab,
        myInput
    },
    data() { 
        return {
            tabs: [
                {
                    title: '所有分类'
                },
                {
                    title: '居家'
                },
                {
                    title: '配件装饰'
                },
                {
                    title: '服装'
                },
                {
                    title: '电器'
                }
            ],

            content: ''
        }
    },
    created() {

    },
    methods:{

    }
 }
</script>

<style scoped>
#type{
    width: 100%;
}
.content{
    display: flex;
    height: 100%;
}
.left{
    width: 3rem;
}
</style>