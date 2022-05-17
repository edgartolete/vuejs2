<template>
<div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3> {{task.text}}
        <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <p> {{ task.day}}</p>
</div>

</template>

<script>
export default{
    name: 'Task',
    props:{
        task: Object
    },

}
</script>


<style scoped>
h3, p{
    margin: 0px;
}
.fas{
    color: red;
    float: right;
}
.task{
    padding: 20px;
    margin: 10px;
    background: #eee;
}

.task.reminder{
    border-left: 5px solid green;
}
</style>