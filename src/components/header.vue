<template>
  <header class="container__header">
    <div class="header">
      <p class="header__title">晉嘉a觀光時間</p>
      <p class="header__title">高雄市-觀光景點</p>
    </div>
  </header>
</template>

<script>
 /* eslint-disable */
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header__title {
  font-size: 30px;
  font-weight: 300;
}

.header {
  display: inline-block;
  border: solid 2px #fff;
  padding: 30px 50px;
  letter-spacing: 3px;
  color: #fff;
  top: 50px;
  width: 60%;
}

.container__header {
  top: 0px;
  /* position: absolute; */
  width: 100%;
  height: 30vh;
  margin: auto;
  text-align: center;
  border-bottom: solid 1px #dbe0df;
  background: linear-gradient(to top, #dbe0df, #42ab9e 100%);
}
</style>
