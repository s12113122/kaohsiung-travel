<template>
  <div class="a">
   <Header></Header>
  <Body></Body>
  </div>
</template>

<script>
/* eslint-disable */
import header from './header';
import body from './body';
export default {
  name: 'HelloWorld',
  data() {
    return {
     
    }
  },
  components: {
    Header: header,
    Body: body,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
