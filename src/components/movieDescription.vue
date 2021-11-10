<template>
  <div>
    <article class="container">
      <div class="row">
        <div class="col-md-12 mb-2 fw-bold display-3 ">
          <span>{{ this.$route.query.title }}</span>
        </div>
        <div class="col-md-12">
          <img
            :src="this.$route.query.poster_path"
            :alt="this.$route.query.tile"
          />
          <div sclass="col-md-12">
            <header>
              <span class="col-md-2 btn btn-primary btn-lg disabled mt-3 mr-3" >{{
                this.$route.query.release_date
              }}</span>
              <button class="col-md-1 btn btn-warning btn-lg disabled mt-3 mr-3">{{
                this.$route.query.vote_average
              }}</button>
            </header>
            <div class="mt-5 h3">{{ this.$route.query.overview }}</div>
          </div>
        </div>
      </div>
    </article>
  </div>
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