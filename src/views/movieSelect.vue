<template>
  <div>
    <movieDescription />
    
  </div>
</template>
 
<script>
import movieDescription from "@/components/movieDescription.vue";

export default {
  components: { movieDescription },
  data() {
    return {
      movie: [],
    };
  },
};
</script>

<style>
</style>