<template>
  <div>
    <div class="upper-about about-block">
      <div class="upper-text-area">  
        <h2 class="about-name over-pic">Kazuto Kudou</h2>
        <p class="about-text over-pic">Age:24</p>
        <p class="about-text over-pic">Profession:Engineer(IT)</p>
      </div>
    </div>
    <div class="middle-about about-block">
      <div class="middle-text-area">
        <h2 class="about-title">Career</h2>
        <br>
        <pre>1996   Born in Niigata Japan</pre>
        <pre>2009   NST Boys and Girls Swimming Tournament 7th</pre>
        <pre>2010   Niigata Middle Distance Swimming Championship 4th</pre>
        <pre>2015   Graduated from Murakami Sakuragaoka High School</pre>
        <pre>2019   Graduated from Niigata University of Helth and Welfare</pre>
        <pre>2020   Start programming...</pre>
      </div>
    </div>
    <div class="lower-about">
      <div class="lower-text-area">
        <h2 class="about-title">Programming Skill</h2>
        <br>
        <h3>Front-end</h3>
        <div class="side-pic">
          <img src="../assets/html5.svg" class="lang">
          <img src="../assets/css-5.svg" class="lang">
          <img src="../assets/javascript-4.svg" class="lang">
          <img src="../assets/logo.png" class="lang">
        </div>
        <h3>Backｰend・Framework</h3>
        <div class="side-pic">
          <img src="../assets/ruby.svg" class="lang">
          <img src="../assets/rails-1.svg" class="lang">
          <img src="../assets/python-5.svg" class="lang">
          <img src="../assets/django.svg" class="lang">
        </div>
        <h3>infrastructure・Database</h3>
        <div class="side-pic">
          <img src="../assets/docker.svg" class="lang">
          <img src="../assets/circle-logo-stacked-black.png" class="lang">
          <img src="../assets/mysql.svg" class="lang">
          <img src="../assets/mariadb.svg" class="lang">
        </div>
        <h3>Other tools</h3>
        <div class="side-pic">
          <img src="../assets/github-icon-1.svg" class="lang">
          <img src="../assets/slack-2.svg" class="lang">
          <img src="../assets/trello.svg" class="lang">
        </div>
      </div>
    </div>
    <div class="bottom-about">
      <h2 class="about-title">Photo Gallery</h2>
      <br>
      <carousel
        :autoplay="carousel.bool"
        :autoplayTimeout="carousel.number"
        :autoplayHoverPause="carousel.bool"
      >
        <slide>
          <img src='../assets/ski.jpg' class="slide-pic">
        </slide>
        <slide>
          <img src='../assets/fire.jpg' class="slide-pic">
        </slide>
        <slide>
          <img src='../assets/tokyo-dome.jpg' class="slide-pic">
        </slide>
        <slide>
          <img src='../assets/sunset.jpg' class="slide-pic">
        </slide>
        <slide>
          <img src='../assets/lift.jpg' class="slide-pic">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data(){
    return {
      carousel: {
        bool: true,
        number: 4000
      },
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>



<style scoped>

.about-block {
  width: cover;
  height: 400px;
}

.about-name {
  padding: 1vh 2vw;
  font-size: 36px;
}

.about-text {
  padding: 0.5vh 1vw;
  font-size: 24px;
}

.middle-about {
  background-color: #ffff
}

.about-title {
  text-align: center;
}

.bottom-about {
  width: 80vw;
  height: 500px;
  margin: 0 auto;
}

.lower-about {
  width: cover;
  height: 700px;
  margin: 0 auto;
}

.lower-text-area,
.middle-text-area {
  margin: 0 auto;
  width: 40%;
  height: 80%;
  padding-top :20px;
}

.lower-text-area > h3 {
  margin: 0 0 20px 0;
}

.over-pic {
  background-color: #ffff;
  width: fit-content;
}

.lang {
  width: 80px;
  height: 70px;
  margin-right: 30px;
}

.side-pic {
  display: flex;
  margin-bottom: 20px;
}

.slide-pic {
  width: 450px;
  height: 300px;
}

.upper-about {
  background-color: #c7c7c7;
  background-image: url('../assets/kudo.jpeg');
  background-position: top center;
  background-size: 80%;
  background-repeat: no-repeat;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: .5px;
}

.upper-text-area {
  height: 95%;
  width: 40vw;
  padding: 10px 0 0 150px;
}

@media screen and (max-width:959px) {

.lower-text-area,
.middle-text-area {
  width: 70%;
}

}

@media screen and (max-width:480px) {
.upper-text-area {
  height: 100%;
  width: 40vw;
  padding: 10px 60px;
}

.upper-about {
  background-size: cover;
}

}
</style>