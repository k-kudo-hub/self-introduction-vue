<template>
  <div class="bottom-about">
    <h2 class="about-title">Photo Gallery</h2>
    <Carousel
      :autoplay="5000"
      :pauseAutoplayOnHover="true"
      :wrapAround="true"
      :transition="800"
    >
      <Slide v-for="(pic, index) in carousel.image" :key="index">
        <img :src="require(`../assets/${pic.url}`)" class="slide-pic">
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  data() {
    return {
      carousel: {
        image: [
          { id: 1, url: "hanami.jpg" },
          { id: 2, url: "sakura.jpg" },
          { id: 3, url: "sunset.jpg" },
          { id: 4, url: "beer.jpg" },
          { id: 5, url: "floor.jpg" },
          { id: 6, url: "fire.jpg" },
          { id: 7, url: "aki.jpg" },
          { id: 8, url: "ramen.jpg" },
          { id: 9, url: "tokyo-dome.jpg" },
          { id: 10, url: "ski.jpg" },          
          { id: 11, url: "lift.jpg" }, 
        ],
      },
    }
  },
  components: {
    Carousel,
    Slide
  },
}
</script>

<style scoped>
.bottom-about {
  width: cover;
  margin: 0 auto 50px;
}

.about-title {
  text-align: center;
  margin-bottom: 40px;
}

.slide-pic {
  width: 60%;
}
</style>