<script>
import { store } from "./store/store.js";
import  axios  from 'axios';

export default {
  name: "home",
  data(){
    return{

      projects:[]

    }
  },

  methods: {
    getApi() {
      axios.get(store.apiUrl + 'projects').then((results) => {
        this.projects = results.data
        console.log(this.projects);
      })
    }
  },

  mounted(){
    this.getApi();
  }
};
</script>

<template>

  <div class="cont">
    <h1>Progetti</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <span>{{ project.name }}</span>
      </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>

</style>
