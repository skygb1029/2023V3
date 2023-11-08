<template>
  <GuessNumber />
  <br>
  <hr>
  <TakeQRcode />
</template>

<script>
import GuessNumber from './components/GuessNumber.vue'
import TakeQRcode from './components/TakeQRcode.vue'

export default {
  name: 'App',
  components: {
    GuessNumber,
    TakeQRcode,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
