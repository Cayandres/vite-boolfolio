<script>
import { store } from "./store/store.js";
import axios from "axios";
import Card from "./js/components/Card.vue";
import Header from "./js/components/Header.vue";


export default {
  name: "home",
  components: {
    Card,
    Header,
  },

  data() {
    return {
      projects: [],
      links: []
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

    <Header/>

    <div class="container">

      <router-view></router-view>

    </div>

</template>

<style lang="scss" >

</style>
