<template>
    <button :class="['my-btn', 'my-btn-' + type]" :style="{
        borderRadius: radius
    }">
        <i :class="icon" v-if="icon ? true : false">123</i>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: '',
    props: {
        type: {
            type: String,
            default: ''
        },

        plain: String,
        round: String,

        icon: String
    },
    data() { 
        return {
            radius: '0.1rem'
        }
    },
    created() {
        if(this.plain === '') {
            this.radius = '0.1rem'
        } else if(this.round === '') {
            this.radius = '0.48rem'
        }
    },
    methods:{

    },
}
</script>

<style scoped lang="scss">
.my-btn {
    border: none;
    color: #fff;
    padding: 0.16rem .3rem;
    width: 100%;
    text-align: center;
}
.my-btn-primary {
    background-color: #409eff;
}
.my-btn-success {
    background-color: #67c23a;
}
</style>