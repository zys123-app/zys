<template>
    <input :type="type" @input="iptChange" :placeholder="placeholder">
</template>

<script>
export default {
    name: '',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    data() { 
        return {

        }
    },
    created() {

    },
    methods:{
        iptChange(e) {
            // console.log(e)
            this.$emit('input', e.target.value)
        }
    },
 }
</script>

<style scoped>
</style>