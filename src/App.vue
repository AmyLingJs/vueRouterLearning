
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>

    <router-link to="/foo">foo</router-link>
    <router-link to ="/bar">bar</router-link>
    <router-link to="/quan">quan</router-link>
    <router-link to="/mine">mine</router-link>
    <router-link to="/home">home</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: red;
}
</style>
