<template>
  <article  class="card hover">
    <img  class="movie-image" :src="movie.backdrop_path" :alt="movie.title" />
    <header >
      <span >{{ movie.title }}</span>
    </header>
    <div class="card">vote average: {{movie.vote_count}}</div>
  </article>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      requiered: true,
    },
  },
};
</script>
<style></style>