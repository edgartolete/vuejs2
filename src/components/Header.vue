<template>
    <header>
        <h1>
            {{ title }}
        </h1>
        <Button
             @click="showAddTask = !showAddTask" 
            @toggle-add-task="$emit('toggle-add-task')" 
            :text="showAddTask ? 'Add Task' : 'Close' " 
            :color="showAddTask ? 'green' : 'red'" />
    </header>
</template>

<script>
import Button from "./Button.vue"
export default{
    name: 'Header',
    props: {
        title: {
            type: String,
        },
        showAddTask:{
            type: Boolean,
            default: true
        }

    },
    components:{
        Button
    },
    emits: ['toggle-add-task']
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>