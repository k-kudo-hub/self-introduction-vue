<template>
  <div id="app">
    <TitleHeader>
    </TitleHeader>
    <router-view></router-view>
    <Footer>
    </Footer>
  </div>
</template>

<script>
import 'normalize.css'
import TitleHeader from './components/TitleHeader.vue'
import Footer from './components/Footer.vue'

export default {
  data(){
    return {
      
    }
  },
  components: {
    TitleHeader,
    Footer,
  }
}
</script>

<style>

.button {
  margin-top: 20px;
  padding: 1.5vh 2vw;
  border-radius: 10px;
}

.button:hover {
  cursor: pointer;
}

</style>
