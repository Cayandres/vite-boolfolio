<script>
export default {
  name: "Card",

  props: {
    project: Object,
  },

  computed: {
    formattedData() {
      const day = new Date(this.project.creation_date);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return day.toLocaleString("it-IT", options);
    },
    category() {
      if (!this.project.category) return "-no category-";
      return this.project.category.name;
    },
  },
};
</script>

<template>
  <ul>
    <li>
      <div class="card">
        <h1>{{ project.name }}</h1>
        <h3><router-link :to="{name: 'Detail', params:{slug: project.slug}}">{{ project.name }}</router-link></h3>
        <p>{{ project.description }}</p>
        <span>{{ formattedData }}</span>
        <div class="container-small">
          <div class="btn btn-category">{{ category }}</div>
          <ul>
            <li v-for="tag in project.tags" :key="tag.id" class="btn btn-tags">
              {{ tag.name }}
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid black;
  }
}
.container-small {
 min-width: 60px ;
  .btn {
    display: flex;
    padding: 20px 20px;
    font-weight: 800;
    border-radius: 20px;
    margin: 10px;
  }

  .btn-category {
    background-color: white;
  }
  .btn-tags {
    background-color: black;
    color: white;
  }
}
</style>
