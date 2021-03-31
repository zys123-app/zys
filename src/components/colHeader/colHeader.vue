<template>
    <div id="header">
        <img src="../../assets/images/headerIcon.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: '',
    data() { 
        return {

        }
    },
    created() {

    },
    methods:{

    },
}
</script>

<style scoped lang="scss">
    #header {
        width: 100%;
        height: .8rem;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        left: 0;
        z-index: 18;
        background-color: #fff;
        img{
            width: .8rem;
            height: .8rem;
            display: block;
        }
    }
</style>