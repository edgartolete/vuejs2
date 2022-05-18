
<template>
  <Header @toggle-add-task="toggleAddTask" title="Task Tracker" />
    <router-view :showAddTask="showAddTask"></router-view>
  <Footer />

</template>


<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',  
  components: {
    Header, Footer
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
      console.log('show Add task: ', this.showAddTask)
    }
  },
  data(){
    return{
      showAddTask: false
    }
  }
}
  
</script>

<style>

</style>
