<template>
  <div>
    <h1>Top rated movies</h1>
    <section class="movie-card">
      <movieCard
        @click="movieSelect(movie)"
        v-for="movie in movie"
        :movie="movie"
        :key="movie.id"
      />
    </section>
    <button @click="moreMovie()" type="btn" class="btn btn-primary btn-lg mt-4">
      ver más
    </button>
  </div>
</template>

<script>
import apiServices from "@/services/api.service";
import Movies from "@/models/Movie";
import movieCard from "@/components/movieCard.vue";
export default {
  components: { movieCard },
  data() {
    return {
      movie: [],
      more: [],
      cont: 1,
    };
  },
  mounted() {
    this.getTopRated();
  },
  methods: {
    async getTopRated() {
      const { data } = await apiServices.getTopRated();
      this.movie = await Promise.all(
        data.results.map((mov) => this.getName(mov.id))
      );
    },
    async getName(id) {
      const { data } = await apiServices.getMovie(id);
      const movieData = new Movies(data);
      return movieData;
    },
    async movieSelect(movieData) {
      this.$router.push({ path: "./movieSelect", query: movieData });
    },
    async moreMovie() {
      this.cont++;
      const { data } = await apiServices.getTopRated(this.cont);
      this.mores = await Promise.all(
        data.results.map((mov) => this.getId(mov.id))
      );
      this.movie = [...this.movie, ...this.mores];
    },
    async getId(id) {
      const { data } = await apiServices.getMovie(id);
      const movieData = new Movies(data);
      return movieData;
    },
  },
};
</script>

<style></style>