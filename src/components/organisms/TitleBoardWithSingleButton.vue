<template>
  <div class="title-board">
    <div class="title-board-background"
      v-bind:style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    ></div>
    <div class="title-board-mask">
      <h2>{{ title }}</h2>
      <div>
        <slot></slot>
      </div>
      <button @click="onClickButton" class="button">{{ buttonTitle }}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  buttonTitle: {
    type: String,
    required: true
  },
  onClickButton: {
    type: Function as PropType<() => void>,
    required: true
  },
  imageName: {
    type: String,
    required: true
  }
})

const backgroundImage = computed(() => props.imageName);
</script>

<style scoped>
.title-board {
  height: 50vh;
  overflow: hidden;
  position: relative;
}

.title-board-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /** background: v-bind(backgroundImage) no-repeat center center/cover; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 2s ease-in-out;
  z-index: 0;
}

.title-board-mask {
  position: relative;
  width: 100%;
  height: calc(100% - 110px * 2);
  background: rgba(0, 0, 0, 0.7);
  color: #ffff;
  margin: auto;
  text-align: center;
  padding: 110px 0;
  z-index: 1;
}

.title-board:hover .title-board-background {
  transform: scale(1.1);
  transition-duration: 2s;
}

.button {
  color: #ffff;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffff;
}

.button:hover {
  transition-duration: 0.5s;
  color: black;
  background-color: rgb(255, 255, 255);
}
</style>
