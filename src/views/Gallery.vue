<template>
  <div>
    <section class="title">
      <TitleBoard
        title="Photo Gallery"
        buttonTitle="See about"
        :imageName="sakuraImage"
      >
        <p>This is his photo gallery page.</p>
        <p>It doesn't look good, but you can take a look if you like.</p>
      </TitleBoard>
    </section>
    <section class="content">
      <Carousel
        :autoplay="5000"
        :pauseAutoplayOnHover="true"
        :wrapAround="true"
        :transition="800"
      >
        <Slide v-for="(pic, index) in carouselImages" :key="index">
          <img :src="pic.url" class="slide-pic">
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </section>
  </div>
</template>

<script setup lang="ts">
import TitleBoard from '@/components/organisms/TitleBoard.vue';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
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
.title {
  margin-bottom: 50px;
}

.content {
  max-width: 90%;
  margin: 0 auto 50px;
}

.slide-pic {
  width: 70%;
}

@media (max-width: 480px) {
  .content {
    max-width: 100%;
  }

  .slide-pic {
    width: 80%;
  }
}
</style>
