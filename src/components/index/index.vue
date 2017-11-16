<template>
  <div>
    <!-- 導航 -->
    <Navbar></Navbar>
    <!-- 內容 --> 
    <Banner></Banner> 
    <!-- <router-view></router-view>      -->
    <About></About>
    <Service></Service>
    <Feedback></Feedback>
    <Product></Product>
    <Contact></Contact> 
    
    <Footer></Footer>

   
  </div>
</template>

<script>
/* eslint-disable */
import navbar from './navbar';
import footer from './footer';
import about from '../content/about';
import service from '../content/service';
import feedback from '../content/Feedback';
import product from '../content/product';
import contact from '../content/contact';
import banner from '../content/banner';
export default {

  data() {
    return {

    }
  },
  components: {
    Navbar: navbar,
    About: about,
    Footer: footer,
    Service: service,
    Feedback:feedback,
    Product: product,
    Contact: contact,
    Banner: banner,
  },
}
</script>

<style scoped>


</style>
