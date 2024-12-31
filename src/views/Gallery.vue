<template>
  <div class="bottom-about">
    <h2 class="about-title">Photo Gallery</h2>
    <Carousel
      :autoplay="5000"
      :pauseAutoplayOnHover="true"
      :wrapAround="true"
      :transition="800"
    >
      <Slide v-for="(pic, index) in carouselImages" :key="index">
        <img :src="pic.url" class="slide-pic">
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';
import hanamiImage from '../assets/images/hanami.jpg';
import sakuraImage from '../assets/images/sakura.jpg';
import sunsetImage from '../assets/images/sunset.jpg';
import beerImage from '../assets/images/beer.jpg';
import floorImage from '../assets/images/floor.jpg';
import fireImage from '../assets/images/fire.jpg';
import akiImage from '../assets/images/aki.jpg';
import ramenImage from '../assets/images/ramen.jpg';
import tokyoDomeImage from '../assets/images/tokyo-dome.jpg';
import skiImage from '../assets/images/ski.jpg';
import liftImage from '../assets/images/lift.jpg';

const carouselImages = [
  { id: 1, url: hanamiImage },
  { id: 2, url: sakuraImage },
  { id: 3, url: sunsetImage },
  { id: 4, url: beerImage },
  { id: 5, url: floorImage },
  { id: 6, url: fireImage },
  { id: 7, url: akiImage },
  { id: 8, url: ramenImage },
  { id: 9, url: tokyoDomeImage },
  { id: 10, url: skiImage },
  { id: 11, url: liftImage },
];
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