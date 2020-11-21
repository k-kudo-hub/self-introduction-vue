<template>
  <div class="home">
    <div class="upper-home home-block">
      <div class="upper-home-mask">
        <div class="home-title">
          <h2>Welcome!</h2>
          <p>This is his self-introduction page.</p>
          <p>Please take your time.</p>
        </div>
      </div>
    </div>
    <div class="middle-home home-block">

    </div>
    <div class="lower-home home-block">

    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.home-block {
  width: 100%;
  height: 400px;
}

.home-title {
  color: #ffff;
  margin: auto;
  text-align: center;
  padding: 130px 0;
}

.middle-home {
  background-color: #c7c7c7;
}

.upper-home {
  background-image: url('../assets/shirine.jpg');
  background-position: center center;
  background-size: cover;
}

.upper-home-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);;
}


</style>
