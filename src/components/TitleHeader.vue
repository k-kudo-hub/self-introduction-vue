<template>
  <div>
    <div class="head-margin">

    </div>
    <div class="head-title">
      <h1>Title.vue</h1>
    </div>
    <div class="head-menu">
      <ul class="menu-bar">
        <li class="menu-item">
          <router-link to="/" active-class="link-active" exact>Home</router-link>
        </li>
        <li class="menu-item">About</li>
        <li class="menu-item">Skill</li>
        <li class="menu-item">Portfolio</li>
        <li class="menu-item">Contact</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.head-margin {
  width: 100%;
  height: 20px;
  background-color: #710000;
}

.head-title {
  height: 100px;
  background-color: #b71c1c;
  color: #ffffff;
}

.head-title > h1 {
  text-align: center;
  margin: 0 auto;
  padding: 30px 10px;
}

.menu-bar {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0 20px;
  margin: 0 auto;
  background-color: #f05545
}

.menu-item {
  padding: 15px 0;
  color: #ffffff;
  font-weight: bold;
}

</style>
