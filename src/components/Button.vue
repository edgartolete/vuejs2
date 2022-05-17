<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default{
    name: 'Button',
    props: ['text', 'color'],
    methods:{
        onClick(){
            this.$emit('toggle-add-task')
        }
    }
}
</script>
<style scoped>
    .btn{
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        color: white;
    }
</style>