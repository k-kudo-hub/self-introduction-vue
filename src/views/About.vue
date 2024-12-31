<script lang="ts">
export default {
  data(){
    return {
      skills: {
        front: [
          { url: "logo.png" },
          { url: "javascript-4.svg" },
        ],
        back: [
          { url: "ruby.svg" },
          { url: "rails-1.svg" },
          { url: "python-5.svg" },
          { url: "django.svg" },
        ],
        inf: [
          { url: "docker.svg" },
          { url: "circle-logo-stacked-black.png" },
          { url: "mysql.svg" },
          { url: "mariadb.svg" },
        ],
        other: [
          { url: "github-icon-1.svg" },
          { url: "slack-2.svg" },
          { url: "trello.svg" },
        ],
      },
    }
  },
};
</script>

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
          <img v-for="(skill, index) in skills.front" :src="require(`../assets/${skill.url}`)" :key="index" class="lang" />
        </div>
        <h3>Backｰend・Framework</h3>
        <div class="side-pic">
          <img v-for="(skill, index) in skills.back" :src="require(`../assets/${skill.url}`)" :key="index" class="lang" />
        </div>
        <h3>infrastructure・Database</h3>
        <div class="side-pic">
          <img v-for="(skill, index) in skills.inf" :src="require(`../assets/${skill.url}`)" :key="index" class="lang" />
        </div>
        <h3>Other tools</h3>
        <div class="side-pic">
          <img v-for="(skill, index) in skills.other" :src="require(`../assets/${skill.url}`)" :key="index" class="lang" />
        </div>
      </div>
    </div>
  </div>
</template>

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

.lower-about {
  width: cover;
  margin: 0 auto 50px;
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
  justify-content: left;
  margin-bottom: 30px;
  flex-wrap: wrap;
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

.bottom-about {
  width: 80vw;
}

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