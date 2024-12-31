<template>
  <div id="app">
    <TitleHeader>
    </TitleHeader>
    <router-view></router-view>
    <NormalFooter>
    </NormalFooter>
  </div>
</template>

<script lang="ts">
import 'normalize.css'
import TitleHeader from './components/organisms/TitleHeader.vue'
import NormalFooter from './components/organisms/NormalFooter.vue'

export default {
  data(){
    return {
      
    }
  },
  components: {
    TitleHeader,
    NormalFooter,
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
