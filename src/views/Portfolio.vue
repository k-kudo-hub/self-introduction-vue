<template>
  <div>
    <div class="pf-label">
      <div class="label-mask">
        <h2>Portfolio</h2>
        <p>His work is displayed here.</p>
        <p>Github is also open to the public.</p>
      </div>
    </div>
    <div class="pf-wrap">
      <div v-for="app in pf" class="pf-block" :key="app.title" :style="{'background-image': 'url(' + import(`../assets/${app.background}`) + ')'}">
        <div class="pf-mask">
          <h3 class="app-title">{{ app.title }}</h3>
          <h4 class="app-sub">{{ app.sub_title }}</h4>
          <div class="app-skills">
            <img :src="require(`../assets/${app.langs.lang1}`)" class="app-skill">
            <img :src="require(`../assets/${app.langs.lang2}`)" class="app-skill">
          </div>
          <p class="app-exp">{{ app.explanation }}</p>
          <a :href="app.link" class="app-link" target="_blank" rel="noopener noreferrer">See Github <i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      pf: {
        sup: {
          title: "Sup-App",
          sub_title: "- support caregiver -",
          background: 'caregiver.jpg',
          explanation: "A portfolio with the theme of maximizing time with customers. It is an application that frees caregivers from 「long reports」 and 「recording on paper media」.",
          link: 'https://github.com/k-kudo-hub/sup_app',
          langs: {
            lang1: 'rails-1.svg',
            lang2: 'ruby.svg',
          }
        },
        intr: {
          title: "Self-introduce-vue",
          sub_title: "- Welcome to my world. -",
          background: 'kudo.jpeg',
          explanation: "A static page created for the purpose of learning Vue.js. It also includes a wealth of Material Design and CSS animation.",
          link: 'https://github.com/k-kudo-hub/self-introduction-vue',
          langs: {
            lang1: 'logo.png',
            lang2: 'nodejs-1.svg',
          }
        },
        com: {
          title: "Coming soon...",
          sub_title: "- We look forward to ! -",
          background: 'shrine.jpg',
          explanation: "stay tuned...",
          link: '',
          langs: {
            lang1: 'django.svg',
            lang2: 'python-5.svg',
          }
        },
      },
    };
  },
};
</script>

<style scoped>

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

.label-mask {
  width: 100%;
  height: calc(100% - 220px);
  background: rgba(0, 0, 0, 0.7);
  color: #ffff;
  margin: auto;
  text-align: center;
  padding: 110px 0;
}

.pf-label {
  width: cover;
  height: 400px;
  background-image: url('../assets/sunset.jpg');
  background-size: 100%;
  margin-bottom: 50px;
  background-position: bottom;
  transition-duration: 2s;
}

.pf-label:hover {
  background-size: 120%;
  transition-duration: 2s;
}

.pf-image {
  width: 550px;
  height: 400px;
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