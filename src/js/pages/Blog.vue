<script>
import { store } from "../../store/store.js";
import axios from "axios";
import Card from "../components/Card.vue";
export default {
  name: "blog",
  components: {
    Card,
  },
  data() {
    return {
      projects: [],
      links: [],
    };
  },

  methods: {
    getApi(endpoint) {
      axios.get(endpoint).then((results) => {
        this.projects = results.data.data;
        this.links = results.data.links;
      });
    },
  },

  mounted() {
    this.getApi(store.apiUrl + "projects");
  },
};
</script>

<template>
  <Card v-for="project in projects" :key="project.id" :project="project" />

  <div class="buttons">
    <button  v-for="(link, index) in links" :key="index"
     v-html="link.label"
      @click="getApi(link.url)" 
      :disabled="link.active || !link.url"></button>
  </div>
</template>

<style>
.buttons{
  text-align: center;
}
button {
  padding: 10px 15px;
}
</style>
