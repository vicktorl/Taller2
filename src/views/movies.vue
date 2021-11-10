<template>
    <div>
        <h1>pelicula</h1>
        <router-link :to="{ name:'movies', params:{id: item }}" 
        v-for="(item,index) of moviest" :key="index">
        <button>foto {{item}}</button>
        </router-link>
        <movie/>
    </div>
</template>

<script>

import movie from "@/components/more.vue";
import apiServices from "@/services/api.service";

import Movies from "@/models/Movie";
export default {
    components:{
        movie,
    },
    data(){
        return{
            moviest:[1,2],
        }
    },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const { data } = await apiServices.getMovie();
      this.movie = await Promise.all(
        data.results.map((mov) => this.getName(mov.id))
      );
    },
    async getName(id) {
      const { data } = await apiServices.getMovie(id);
      const movieData = new Movies(data);
      console.log(movieData);
      return movieData;
    },
  }
}
</script>

<style>

</style>