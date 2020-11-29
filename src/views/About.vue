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
          <template v-for="skill in skills.front"> 
            <img :src="require(`../assets/${skill.url}`)" :key="skill.id" class="lang">
          </template>
        </div>
        <h3>Backｰend・Framework</h3>
        <div class="side-pic">
          <template v-for="skill in skills.back"> 
            <img :src="require(`../assets/${skill.url}`)" :key="skill.id" class="lang">
          </template>
        </div>
        <h3>infrastructure・Database</h3>
        <div class="side-pic">
          <template v-for="skill in skills.inf"> 
            <img :src="require(`../assets/${skill.url}`)" :key="skill.id" class="lang">
          </template>
        </div>
        <h3>Other tools</h3>
        <div class="side-pic">
          <template v-for="skill in skills.other"> 
            <img :src="require(`../assets/${skill.url}`)" :key="skill.id" class="lang">
          </template>
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
        <template v-for="pic in carousel.image">
          <slide :key="pic.id">
            <img :src="require(`../assets/${pic.url}`)" class="slide-pic">
          </slide>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data(){
    return {
      skills: {
        front: [
          { id: 1, url: "html5.svg" },
          { id: 2, url: "css-5.svg" },
          { id: 3, url: "javascript-4.svg" },
          { id: 4, url: "logo.png" },
        ],
        back: [
          { id: 1, url: "ruby.svg" },
          { id: 2, url: "rails-1.svg" },
          { id: 3, url: "python-5.svg" },
          { id: 4, url: "django.svg" },
        ],
        inf: [
          { id: 1, url: "docker.svg" },
          { id: 2, url: "circle-logo-stacked-black.png" },
          { id: 3, url: "mysql.svg" },
          { id: 4, url: "mariadb.svg" },
        ],
        other: [
          { id: 1, url: "github-icon-1.svg" },
          { id: 2, url: "slack-2.svg" },
          { id: 3, url: "trello.svg" },
        ],
      },
      carousel: {
        bool: true,
        number: 4000,
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
  text-align: center;
}

.lower-about {
  width: cover;
  height: 850px;
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
  padding: 15px 10px;
}

.side-pic {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.slide-pic {
  width: 500px;
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