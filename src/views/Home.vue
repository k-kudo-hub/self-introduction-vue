<template>
  <div class="home">
    <TitleBoard
      title="Welcome!"
      buttonTitle="See about"
      :imageName="shrineImage"
      :onClickButton="toAbout"
    >
      <p>This is his self-introduction page.</p>
      <p>Do you want to know him?</p>
    </TitleBoard>
    <div class="middle-home home-block">
      <div class="middle-content">
        <h2>"Confront inconvenience"</h2>
        <p>...that is his theme</p>
      </div>
    </div>
    <div class="lower-home home-block">
      <div class="lower-home-mask">
        <div :class="{fadeIn: visible}" class="lower-content">
          <h2 v-show="visible">For someone.</h2>
          <p v-show="visible">There seems to be a work he made</p>
          <p v-show="visible">Let's go see his work together</p>
          <button @click="toPortfolio" v-show="visible" class="button to-portfolio">See Portfolio → </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TitleBoard from "../components/organisms/TitleBoard.vue";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import shrineImage from '../assets/images/shrine.jpg';

const visible = ref(false);
const router = useRouter();

const handleScroll = () => {
  const element = document.getElementById('app');
  if (element && !visible.value) {
    const top = element.getBoundingClientRect().top;
    visible.value = top < window.innerHeight - 1300;
  }
};

const toAbout = () => {
  router.push({ path: 'about' });
};

const toPortfolio = () => {
  router.push({ path: 'portfolio' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>

.fadeIn {
  animation: fadeIn 2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(50vw);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.home-block {
  width: 100%;
  height: 450px;
}

.lower-content {
  text-align: center;
  padding: 130px 0;
  margin: 0 auto;
}

.lower-content > h2 {
  font-size: 32px;
  font-weight: bold;
}

.lower-home {
  overflow: hidden;
  background-image: url('../assets/images/caregiver.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.lower-home-mask {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
}

.middle-home {
  background-color: #363535;
  color: #ffff;
  text-align: center;
}

.middle-content {
  margin: 0 auto;
  padding: 180px 0;
}

.to-portfolio {
  background-color: rgba(255, 255, 255, 0.5);
  color: #000000;
  border: 1px solid #000000;
}

.to-portfolio:hover {
  background-color: rgb(255, 255, 255);
  transition-duration: 0.5s;
}

</style>
