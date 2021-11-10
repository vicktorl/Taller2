<template>
  <div>
    <h1>Most Popular</h1>
    <section class="movie-card">
      <movieCard
        @click="movieSelect(movie)"
        v-for="movie in movie"
        :movie="movie"
        :key="movie"
      />
    </section>
    <div>
      <button
        @click="moreMovie()"
        type="btn"
        class="btn btn-primary btn-lg mt-4"
      >
        ver más
      </button>
    </div>
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
      mores: [],
      cont: 1,
    };
  },
  mounted() {
    this.getPopular();
  },
  methods: {
    async getPopular() {
      const { data } = await apiServices.getPopular();
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
      const { data } = await apiServices.getPopular(this.cont);
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
<style>
.movie-card {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: 280px;
  gap: 1rem;
}
.movie-image {
  cursor: pointer;
  max-height: 240px;
  min-width: 250px;
  padding: 10px;
}
.hover {
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>