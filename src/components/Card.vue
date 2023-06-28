<script>

import { store } from "../store/store.js";
import  axios  from 'axios';

export default {
  name: "Card",
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
  <ul>
    <li v-for="project in projects" :key="project.id">
      <div class="card">
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
        <span>{{ project.creation_date }}</span>

      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul{
  display: flex;
  flex-wrap: wrap;
  li{
    padding: 20px;
  }
}
.card {
  height: 300px;
  width: calc(100% / 5);
  .card-image {
    aspect-ratio: 1/1;
    height: 150px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  h4 {
    padding-top: 10px;
  }
}
</style>
