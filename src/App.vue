<template>
  <div id="app">
    <TitleHeader>
    </TitleHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css'
import TitleHeader from './components/TitleHeader.vue'

export default {
  data(){
    return {
      
    }
  },
  components: {
    TitleHeader,
  }
}
</script>

<style scoped>

</style>
