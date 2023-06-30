 <script>
  import { store } from "../../store/store.js";
  import axios from "axios";
  export default {
  name: 'Detail',

  data(){
    return{
      project: {
        name:null
      }
    }
  }, 
  methods:{
    getApi(){
      axios.get(store.apiUrl+'projects/' +this.$route.params.slug)
      .then(result => {
        this.project = result.data
      })
    }
  },
  mounted(){
    this.getApi()
  }
  }
  </script>
   
<template>
  <h1>{{ project.name }}</h1>
  <div>{{ project.description }}</div>
</template>

<style>

</style>