<template>
  <div>
    <section class="page-title">
      <TitleBoard
        title="Portfolio"
        :imageName="sunsetImage"
      >
        <p>His work is displayed here.</p>
        <p>Github is also open to the public.</p>
      </TitleBoard>
    </section>
    <section class="pf-wrap">
      <div v-for="app in pf" class="pf-block" :key="app.title" :style="{'background-image': 'url(' + `${app.background}` + ')'}">
        <div class="pf-mask">
          <h3 class="app-title">{{ app.title }}</h3>
          <h4 class="app-sub">{{ app.sub_title }}</h4>
          <div class="app-skills">
            <img :src="app.langs.lang1" class="app-skill">
            <img :src="app.langs.lang2" class="app-skill">
          </div>
          <p class="app-exp">{{ app.explanation }}</p>
          <a :href="app.link" class="app-link" target="_blank" rel="noopener noreferrer">See Github <i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import TitleBoard from '@/components/organisms/TitleBoard.vue';
import railsLogo from '../assets/icons/rails-1.svg';
import rubyLogo from '../assets/icons/ruby.svg';
import vueLogo from '../assets/icons/logo.png';
import nodeLogo from '../assets/icons/nodejs-1.svg';
import djangoLogo from '../assets/icons/django.svg';
import pythonLogo from '../assets/icons/python-5.svg';
import caregiverImage from '../assets/images/caregiver.jpg';
import kudoImage from '../assets/images/kudo.jpeg';
import shrineImage from '../assets/images/shrine.jpg';
import sunsetImage from '../assets/images/sunset.jpg';

const pf = {
  sup: {
    title: "Sup-App",
    sub_title: "- support caregiver -",
    background: caregiverImage,
    explanation: "A portfolio with the theme of maximizing time with customers. It is an application that frees caregivers from 「long reports」 and 「recording on paper media」.",
    link: 'https://github.com/k-kudo-hub/sup_app',
    langs: {
      lang1: railsLogo,
      lang2: rubyLogo,
    }
  },
  intr: {
    title: "Self-introduce",
    sub_title: "- Welcome to my world. -",
    background: kudoImage,
    explanation: "A static page created for the purpose of learning Vue.js. It also includes a wealth of Material Design and CSS animation.",
    link: 'https://github.com/k-kudo-hub/self-introduction-vue',
    langs: {
      lang1: vueLogo,
      lang2: nodeLogo,
    }
  },
  com: {
    title: "Coming soon...",
    sub_title: "- We look forward to ! -",
    background: shrineImage,
    explanation: "stay tuned...",
    link: '',
    langs: {
      lang1: djangoLogo,
      lang2: pythonLogo,
    }
  },
};
</script>

<style scoped>
.page-title {
  margin-bottom: 50px;
}

.app-exp {
  width: 70%;
  height: 30%;
  margin: 20px auto 5px;
  font-family: sans-serif;
}

.app-title {
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  padding-top: 50px;
}

.app-skills {
  display: flex;
  justify-content: space-around;
  margin: 30px auto 0;
  width: 50%;
}

.app-skill {
  width: 60px;
  height: 50px;
}

.app-sub {
  margin: 0 auto;
}

.app-link {
  text-decoration: none;
  font-family: sans-serif;
  padding: 1.5vh 2vw;
  border-radius: 10px;
  background-color: rgba(0,0,0, 0.6);
  color: #ffff;
}

.app-link:hover {
  background-color: rgba(0,0,0, 0.8);
}

h2 {
  text-align: center;
  margin: 30px auto;
}

.pf-block {
  width: 550px;
  height: 400px;
  border: 1px solid black;
  margin-bottom: 70px;
  background-size: cover;
  border: none;
}

.pf-mask {
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 0.8px;
  text-align: center;
  box-shadow: 10px 10px 10px rgba(0,0,0,0.4); 
}

.pf-wrap {
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto 50px;
  flex-wrap: wrap;
}

</style>
