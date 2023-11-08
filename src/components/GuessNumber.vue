<template>
  <div class="GuessNumber">
    <h1>猜數字</h1>
    <br><br>
    <input type="number"
           v-model="inputA"> A
    <br><br>
    <input type="number"
           v-model="inputB"> B
    <br><br>
    <!-- <button @click="start"> start </button> -->
    <br><br>
    <button @click="prepare"> 開始遊戲 </button>
    <br><br>
    <button @click="answer"> 回 答 </button>
    <br><br>
    <div>
      <span> {{ refer }} </span>
    </div>
    <br><br>
    <div>
      <span v-for="item in history"
            :key="item.id">{{ item }}<br></span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'GuessNumber',
  props: {
    msg: String,
  },
  data() {
    return {
      inputA: 0,
      inputB: 0,
      isOver: false,
      remain: 5040,
      tmp: 0,
      forI: undefined,
      unit_1: undefined,
      unit_10: undefined,
      unit_100: undefined,
      unit_1000: undefined,
      answerBase: undefined,
      refer: undefined,
      history: [],
    }
  },
  methods: {
    start() {},
    ///////////////////////////////
    prepare() {
      let answerBase = new Array(this.remain)
      // 清空答案庫
      for (let i = 0; i < 10000; i++) {
        this.unit_1 = i % 10
        this.unit_10 = Math.floor(i / 10) % 10
        this.unit_100 = Math.floor(i / 100) % 10
        this.unit_1000 = Math.floor(i / 1000) % 10
        if (this.unit_1 !== this.unit_10 && this.unit_1 !== this.unit_100 && this.unit_1 !== this.unit_1000 && this.unit_10 !== this.unit_100 && this.unit_10 !== this.unit_1000 && this.unit_100 !== this.unit_1000) {
          answerBase[this.tmp] = [this.unit_1000, this.unit_100, this.unit_10, this.unit_1]
          this.tmp++
        }
      }
      this.remain = this.tmp
      this.answerBase = answerBase
      this.isOver = false
      this.answer()
    },
    // /////////////////////////////////////
    answer() {
      // 確認 A B
      let iA = this.inputA
      let iB = this.inputB

      // 第一輪之外 refer != undefined
      if (this.refer != undefined) {
        this.history.push(`${this.refer.join('')} ${iA}A ${iB}B`)

        // 判斷 有沒有中
        if (iA + iB === 0) {
          for (let i = 0; i < 4; i++) {
            this.answerBase = this.answerBase.filter((subArray) => !subArray.includes(this.refer[i]))
          }
        } else {
          this.answerBase = this.answerBase.filter((arr) => {
            let sameCount = 0
            for (let i = 0; i < 4; i++) {
              if (arr.includes(this.refer[i])) {
                sameCount++
              }
            }
            return sameCount === iA + iB
          })
        }
        if (iA == 0 && iB != 0) {
          // 位置都不對 保留位置不一樣的
          for (let i = 0; i < 4; i++) {
            this.answerBase = this.answerBase.filter((arr) => arr[i] != this.refer[i])
          }
        } else if (iA != 0 && iB == 0) {
          // 位置都對 保留位置一樣的
          for (let i = 0; i < 4; i++) {
            this.answerBase = this.answerBase.filter((arr) => arr.some((val, i) => val === this.refer[i]))
          }
        }
        let answerNum = []
        for (let i = 0; i < this.answerBase.length; i++) {
          let arr = this.answerBase[i]
          let aa = 0
          let bb = 0
          for (let j = 0; j < 4; j++) {
            if (arr[j] == this.refer[j]) {
              aa++
            } else {
              for (let k = 0; k < 4; k++) {
                if (arr[j] == this.refer[k]) {
                  bb++
                }
              }
            }
          }
          if (aa === iA && bb === iB) {
            answerNum.push(arr)
          }
        }
        // 去重操作
        answerNum = [...new Set(answerNum)]
        this.answerBase = answerNum
        console.log(this.answerBase)
      }
      let randNum = Math.floor(Math.random() * this.answerBase.length)
      this.refer = this.answerBase[randNum]
      // console.log(this.refer.join(""));
      console.log(this.refer)
    },
  },
}
</script>

<style scoped>
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
</style>
