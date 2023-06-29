<script>

import { store } from "../../store/store.js";
import  axios  from 'axios';

export default {
  name: "Card",
  
  props:{
    project: Object
  },

  computed:{
    formattedData(){
      const day = new Date(this.project.creation_date);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return day.toLocaleString('it-IT', options)
    },
    category(){
      if(!this.project.category_id) return '-no category-';
      return this.project.category_id.name
    }
  }
};
</script>

<template>
  <ul>
    <li>
      <div class="card">
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
        <span>{{ formattedData }}</span>
        <span>{{ category }}</span>


      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul{
  list-style: none;
  li{
    padding: 20px;
    border-bottom: 1px solid black;
  }
}
</style>
