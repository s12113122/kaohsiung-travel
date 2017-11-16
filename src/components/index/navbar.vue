<template>
  <div class="">
    <div>
      <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top  bg-primary">
          <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand " href="">
              <div style="color: #313550;font-size: 1.8rem;">搬運先生</div>
            </a>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link" @click="scrollindex()" style="cursor:pointer">首頁</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="scrollAbout()" style="cursor:pointer">關於我們</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="scrollService()" style="cursor:pointer">服務內容</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="scrollFeedback()" style="cursor:pointer">客戶回饋</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="scrollProduct()" style="cursor:pointer">商品介紹</a>
                </li>
                <li class="nav-item">
                  <a id="" class="nav-link" @click="scrollContact()" style="cursor:pointer">聯絡我們</a>
                </li>
                <li class="nav-item">
                  <a id="" style="color:#ff4949; " class="nav-link" href="http://babacar.digipack-develop.com/" target="_blank">BaBaCars</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- <nav class="navbar navbar-toggleable-md fixed-top  navbar-light  bg-faded " >
                  <div class="container">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand " href="">
                      <div style="color: #313550;font-size: 2rem;">搬運先生</div>
                    </a>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                      <ul class="navbar-nav ">
                        <li class="nav-item">
                          <a class="nav-link" href="">首頁</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="">關於我們</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="">服務內容</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="">商品介紹</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="">聯絡我們</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                </nav> -->

      </div>
    </div>
    <!-- header -->
    <!-- <div class="container">
                      <div style="margin:auto 0 ;"> 
                        <div class="banner-text text-center">
                          <h1>  高品質 效率佳 服務周到</h1>
                        </div>
                   
                      </div>
                    </div> -->
  </div>
  <!-- banner -->
</template>

<script>
/* eslint-disable */
export default {

  data() {
    return {
      scrolled: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      console.log(window.scrollY);
      this.scrolled = window.scrollY > 50;
    },
    scrollindex() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    scrollAbout() {
      window.scrollTo({ top: 700, left: 0, behavior: 'smooth' });
    },
    scrollService() {
      window.scrollTo({ top: 1140, left: 0, behavior: 'smooth' });
    },
    scrollFeedback() {
      window.scrollTo({ top: 2030, left: 0, behavior: 'smooth' });
    },
    scrollProduct() {
      window.scrollTo({ top: 3030, left: 0, behavior: 'smooth' });
    },
    scrollContact() {
      window.scrollTo({ top: 3910, left: 0, behavior: 'smooth' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {}

.header {
  /* background-color: #292c47; */
  /* position: fixed; */
  width: 100%;
  z-index: 999;
}

.header .header-content {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin: 0 auto;
  max-width: 1170px;
  padding: 30px 0;
  width: 100%;
  -moz-transition: padding 0.3s;
  -o-transition: padding 0.3s;
  -webkit-transition: padding 0.3s;
  transition: padding 0.3s;
}

.header .logo {
  float: left;
}

.logo {
  color: rgba(255, 255, 255, 0.75);
  font-size: 30px;
  font-weight: 700;
  margin: auto 0 0 50px;
  text-transform: uppercase;
}

.logo a:hover,
.logo a.active {
  color: #fff;
}

#header.fixed {
  /* background-color: #292c47; */
}

#header.fixed .header-content {
  border-bottom: 0;
  padding: 25px 0;
}

#header.fixed .nav-toggle {
  top: 18px;
}



.navigation {
  float: right;
}

.navigation li {
  display: inline-block;
}

.navigation a {
  color: rgba(255, 255, 255, 0.75);
  font-size: 24px;
  font-weight: 700;
  margin-left: 40px;
  text-transform: uppercase;
}

.navigation a:hover,
.navigation a.active {
  color: #fff;
}

















/* ==========================================================================
	Banner
========================================================================== */

.banner {
  background-image: url(../../assets/banner.jpg);
  background-position: center top;
  background-repeat: no-repeat;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  min-height: 750px;
}

.banner-text {
  padding-top: 30%;
  /* padding-top: 10%; */
}

.banner-text h1 {
  /* padding-top: 10%; */
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}

.banner-text p {
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 80px;
}
</style>
