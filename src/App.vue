<template>
  <div>
    <div id="nav" class="navbar navbar-light">
      <div class="position-relative">
        <p class="text-uppercase">
        <router-link to="/">Home</router-link> |
        <router-link to="/topRated">Top Movies</router-link>
        </p>
      </div>
    </div>
    <router-view></router-view>
    <more />
  </div>
</template>

<script>
import more from "./components/more.vue";

export default {
  name: "App",
  components: {
    more,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
