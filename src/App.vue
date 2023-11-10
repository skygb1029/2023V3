<template>
  <div class="app">
    <router-view name="header" />

    <div>
      <router-link to="/">主頁</router-link>
      <br>
      <router-link to="/GuessNumber">GuessNumber</router-link>
      <br>
      <router-link to="/TakeQRcode">TakeQRcode</router-link>
    </div>

    <div :class="body">
      <router-view />
    </div>
  </div>
</template>

<script>
// import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    console.log(router)
    return {}
  },
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
