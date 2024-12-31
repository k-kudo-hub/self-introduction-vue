<script lang="ts" setup>
import vueLogo from '../assets/icons/logo.png';
import javascriptLogo from '../assets/icons/javascript-4.svg';
import rubyLogo from '../assets/icons/ruby.svg';
import railsLogo from '../assets/icons/rails-1.svg';
import pythonLogo from '../assets/icons/python-5.svg';
import djangoLogo from '../assets/icons/django.svg';
import dockerLogo from '../assets/icons/docker.svg';
import circleLogo from '../assets/icons/circle-logo-stacked-black.png';
import mysqlLogo from '../assets/icons/mysql.svg';
import mariadbLogo from '../assets/icons/mariadb.svg';
import githubLogo from '../assets/icons/github-icon-1.svg';
import slackLogo from '../assets/icons/slack-2.svg';
import trelloLogo from '../assets/icons/trello.svg';

const skills = {
  front: [
    { url: vueLogo },
    { url: javascriptLogo },
  ],
  back: [
    { url: rubyLogo },
    { url: railsLogo },
    { url: pythonLogo },
    { url: djangoLogo },
  ],
  inf: [
    { url: dockerLogo },
    { url: circleLogo },
    { url: mysqlLogo },
    { url: mariadbLogo },
  ],
  other: [
    { url: githubLogo },
    { url: slackLogo },
    { url: trelloLogo },
  ],
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
        <pre class="about-content">1996   Born in Niigata Japan</pre>
        <pre class="about-content">2009   NST Boys and Girls Swimming Tournament 7th</pre>
        <pre class="about-content">2010   Niigata Middle Distance Swimming Championship 4th</pre>
        <pre class="about-content">2015   Graduated from Murakami Sakuragaoka High School</pre>
        <pre class="about-content">2019   Graduated from Niigata University of Health and Welfare</pre>
        <pre class="about-content">2020   Start programming...</pre>
      </div>
    </div>
    <div class="lower-about">
      <div class="lower-text-area">
        <h2 class="about-title">Programming Skill</h2>
        <h3>Frontend</h3>
        <div class="side-pic">
          <img v-for="(skill, index) in skills.front" :src="skill.url" :key="index" class="lang" />
        </div>
        <h3>Backend</h3>
        <div class="side-pic">
          <img v-for="(skill, index) in skills.back" :src="skill.url" :key="index" class="lang" />
        </div>
        <h3>infrastructure・Database</h3>
        <div class="side-pic">
          <img v-for="(skill, index) in skills.inf" :src="skill.url" :key="index" class="lang" />
        </div>
        <h3>Other tools</h3>
        <div class="side-pic">
          <img v-for="(skill, index) in skills.other" :src="skill.url" :key="index" class="lang" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.about-block {
  width: cover;
}

.about-content {
  white-space: pre-wrap;
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
  margin-bottom: 40px;
}

.lower-about {
  width: cover;
  margin: 0 auto 50px;
}

.lower-text-area,
.middle-text-area {
  margin: 0 auto;
  width: 60%;
  /* height: 80%; */
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
  height: 40vh;
  background-color: #c7c7c7;
  background-image: url('../assets/images/kudo.jpeg');
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