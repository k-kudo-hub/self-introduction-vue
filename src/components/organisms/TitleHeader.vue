<template>
  <div>
    <div class="head-belt"></div>
    <div class="head-title">
      <h1>Cut - k-kudo-hub</h1>
    </div>
    <div class="head-menu">
      <ul class="menu-bar">
        <router-link to="/" active-class="link-active" exact class="menu-link">
          <li class="menu-item"><i class="fas fa-home"></i> <span class="menu-title">Home</span></li>
        </router-link>
        <router-link to="/about" active-class="link-active" exact class="menu-link">
          <li class="menu-item"><i class="fas fa-male"></i> <span class="menu-title">About</span></li>
        </router-link>
        <router-link to="/portfolio" active-class="link-active" exact class="menu-link">
          <li class="menu-item"><i class="fas fa-briefcase"></i> <span class="menu-title">Portfolio</span></li>
        </router-link>
        <router-link to="/gallery" active-class="link-active" exact class="menu-link">
          <li class="menu-item"><i class="fas fa-image"></i> <span class="menu-title">Gallery</span></li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup> 
</script>

<style>
.head-belt {
  width: 100%;
  height: 20px;
  background-color: #00002c;
}

.head-title {
  height: 100px;
  background-color: #17009c;
  color: #ffffff;
}

.head-title > h1 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  margin: 0 auto;
  padding: 30px 10px;
}

.link-active {
  border-bottom: 2px solid #ffff;
}

.menu-bar {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0 20px;
  margin: 0 auto;
  background-color: #767bff;
  overflow-x: scroll;
}

.menu-item {
  padding: 15px 30px;
  font-weight: bold;
}

@media screen and (max-width:480px) {
  .menu-title {
    display: none;
  }
}

.menu-link {
  text-decoration: none;
  color: #ffffff;
}

.menu-link:hover {
  border-bottom: 2px solid #ffff;
}

</style>
