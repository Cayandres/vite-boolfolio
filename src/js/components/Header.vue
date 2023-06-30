<script>
export default {
  name: "Header",
};
</script>

<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </li>

    <li>
      <router-link :to="{ name: 'contacts' }">Contatti</router-link>
    </li>

    <li>
      <router-link :to="{ name: 'about' }">Chi siamo</router-link>
    </li>

    <li>
      <router-link :to="{ name: 'blog' }">Blog</router-link>
    </li>
    
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  li {
    padding: 10px 20px;
    a {
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      &:hover,
      &.active {
        color: blue;
      }
    }
  }
}
</style>
