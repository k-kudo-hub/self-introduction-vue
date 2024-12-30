<template>
  <div class="home">
    <div class="upper-home">
      <div class="upper-home-mask">
        <h2>Welcome home!</h2>
        <p>This is his self-introduction page.</p>
        <p>Do you Want to know him?</p>
        <button @click="toAbout" class="button to-about">See About</button>
      </div>
    </div>
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

<script lang="ts">

export default {
  data(){
    return {
      visible: false
    };
  },
  created(){
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed(){
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toAbout(){
      this.$router.push({path: "about"});
    },
    toPortfolio(){
      this.$router.push({path: "portfolio"});
    },
    handleScroll(){
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight - 1300;
      }
    },
  }
}
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
  padding: 130px;
  margin: 0 auto;
}

.lower-content > h2 {
  font-size: 32px;
  font-weight: bold;
}

.lower-home {
  background-image: url('../assets/caregiver.jpg');
  background-position: center;
  background-size: 100%;
}

.lower-home-mask {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
}

.middle-home {
  background-color: #c7c7c7;
  text-align: center;
}

.middle-content {
  margin: 0 auto;
  padding: 180px
}

.to-about {
  color: #ffff;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffff;
}

.to-about:hover {
  transition-duration: 0.5s;
  color: black;
  background-color: rgb(255, 255, 255);
}

.to-portfolio {
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
}

.to-portfolio:hover {
  background-color: rgb(255, 255, 255);
  transition-duration: 0.5s;
}

.upper-home {
  height: 400px;
  background-image: url('../assets/shirine.jpg');
  background-position: bottom;
  background-size: 100%;
  transition-duration: 2s;
}

.upper-home:hover {
  background-size: 120%;
  transition-duration: 2s;
}

.upper-home-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #ffff;
  margin: auto;
  text-align: center;
  padding: 110px 0;
}

</style>
