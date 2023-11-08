<template>
  <div class="TakeQRcode">
    <h1>掃QR CODE</h1>
    <br><br>
    <button @click="changeFrontBack">鏡頭調換</button>
    <br><br>
    <button @click="changePhotoVideo">模式調換</button>
    <br><br>
    <input id="scanningInput"
           class="hidden"
           type="file"
           :capture="capture"
           :accept="accept" />
    <label for="scanningInput"
           class="button-primary"> {{ labelText }}</label>
    <br><br><br>
    <input type="text"
           v-model="inputText">

  </div>
</template>

<script>
export default {
  name: 'TakeQRcode',
  props: {
    msg: String,
  },
  data() {
    return {
      inputText: undefined,
      textFB: '後鏡頭',
      textPV: '拍照',
      labelText: '後鏡頭拍照',
      capture: 'image/*',
      accept: 'environment',
    }
  },
  methods: {
    changeFrontBack() {
      this.capture = this.capture == 'image/*' ? 'video/*' : 'image/*'
      this.textFB = this.textFB == '後鏡頭' ? '前鏡頭' : '後鏡頭'
      this.labelText = this.textFB + this.textPV
    },
    changePhotoVideo() {
      this.accept = this.accept == 'environment' ? 'user' : 'environment'
      this.textPV = this.textPV == '拍照' ? '錄影' : '拍照'
      this.labelText = this.textFB + this.textPV
    },
  },
}
</script>

<style lang="scss" scoped>
$colorLinks: #42a6f7;
$colorFocus: #167fff;

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
label {
  vertical-align: middle;
  margin-bottom: 4px;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.5rem 2rem;
  border: 1px solid $colorLinks;
  border-radius: 0.375rem;
  color: $colorLinks;
  cursor: pointer;
}
label:hover,
label:focus {
  border: 1px solid $colorFocus;
  background-color: $colorLinks;
  color: white;
}

.hidden {
  display: none;
}
input {
  vertical-align: top;
}
</style>
