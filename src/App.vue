<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "~Bootstrap/scss/Bootstrap";
#app {
  min-height: 100vh;
}

body {
  margin: 0;
  // width: 100vw;
  font-family: "Hiragino Sans GB", "华文细黑", "STHeiti", "微软雅黑", "Microsoft YaHei", SimHei, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f9f9f9;
  color: #484848;
}
p {
  font-size: 14px;
  line-height: 22.4px;
  color: #6c7279; }

h1 {
  font-size: 65px;
  color: #2d3033; }

h2 {
  font-size: 40px;
  color: #2d3033; }

h3 {
  font-size: 28px;
  color: #2d3033;
  font-weight: 300; }

h4 {
  font-size: 22px;
  color: #2d3033;
  font-weight: 400; }

h5 {
  font-size: 14px;
  color: #2d3033;
  text-transform: uppercase;
  font-weight: 700; }


</style>
