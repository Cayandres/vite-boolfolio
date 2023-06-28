<script>
import { store } from "./store/store.js";
import  axios  from 'axios';
import Card from './components/card.vue';


export default {
  name: "home",
  components:{
    Card
  },

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
        <card>
        </card>
  </div>

</template>

<style lang="scss" scoped>

</style>
