<template>
  <div>
    <div class="head-margin">

    </div>
    <div class="head-title">
      <h1>Self-introduction.vue</h1>
    </div>
    <div class="head-menu">
      <ul class="menu-bar">
        <li class="menu-item">
          <router-link to="/" active-class="link-active" exact class="menu-link"><i class="fas fa-home"></i> Home</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/about" active-class="link-active" exact class="menu-link"><i class="fas fa-male"></i> About</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/portfolio" active-class="link-active" exact class="menu-link"><i class="fas fa-briefcase"></i> Portfolio</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/contact" active-class="link-active" exact class="menu-link"><i class="fas fa-comments"></i> Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
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

.link-active {
  border-bottom: 2px solid #ffff;
}

.menu-bar {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0 20px;
  margin: 0 auto;
  background-color: #f05545;
}

.menu-item {
  padding: 15px 30px;
  font-weight: bold;
}

.menu-link {
  text-decoration: none;
  color: #ffffff;
}

.menu-link:hover {
  border-bottom: 2px solid #ffff;
}

</style>
