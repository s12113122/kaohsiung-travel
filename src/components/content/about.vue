<template>
  <section id="testimonials" class="section testimonials no-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 feature text-center">
          <!-- <div>
              <img class="img img-fluid" src="../../assets/rawpixel.jpg" alt="">
            </div> -->
          <div class="hovereffect">
            <img class="img img-responsive" src="../../assets/rawpixel.jpg" alt="">
            <div class="overlay">
              <h2>Community</h2>
              <p class="set1">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a target="_blank" href="https://www.facebook.com/move0800222966/?fref=ts" t>
                  <i class="fa fa-facebook"></i>
                </a>
              </p>
              <hr>
              <hr>
              <p class="set2">
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 feature text-center">
          <span class="icon icon-desktop"></span>
          <div class="feature-content">
            <h2>關於我們</h2>
            <p>搬運先生成立至今已有十數年,在多數人的觀點,搬運僅是傳統的苦力行業,但搬運先生以顛覆傳統,結合專業化的經營,條理式的員工管理,電腦系統化及社會大眾化的模式來經營搬家的最佳口碑及企業形象,讓每一個客戶都能享有最妥善且有保障的頂級服務</p>
            <p>屏東搬家推薦，高雄搬家推薦，台南搬家推薦</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.img {
  max-height: 350px;
  max-width: 100%;
}

.container {
  /* margin-top: -10px; */
  padding: 60px 0;
  /* background-color: #000; */
}

avatar {
  background-color: #000;
}

.testimonials {
  /* background-color: rgba(218, 216, 216, 0.61);   */
  background-image: url("../../assets/team_bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
}

.testimonials blockquote {
  border: 0;
  margin: 0;
  padding: 100px 15% 0;
}

.testimonials p {
  margin-top: 5%;
  color: #777;
  font-size: 20px;
  line-height: inherit;
  /* font: italic 24px "Cardo", Georgia, "Times New Roman", serif; */
}

.testimonials h2 {
  font-size: 32px;
}



/* .testimonials cite {
  color: #fff;
  display: block;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  margin-top: 30px;
  text-transform: uppercase;
} */
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}

.hovereffect img {
  display: block;
  position: relative;
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  font-size: 17px;
  padding: 10px;
}

.hovereffect:hover h2 {
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: translate3d(-50%,-50%,0) scale3d(0.8,0.8,1);
  transform: translate3d(-50%,-50%,0) scale3d(0.8,0.8,1);
}

.hovereffect a.info {
  display: inline-block;
  text-decoration: none;
  padding: 7px 14px;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #fff;
  margin: 50px 0 0 0;
  background-color: transparent;
}

.hovereffect a.info:hover {
  box-shadow: 0 0 5px #fff;
}

.hovereffect hr {
  width: 40%;
  opacity: 0;
  filter: alpha(opacity=0);
  border: 1px solid #FFF;
}

.hovereffect  hr:nth-child(3) {
  -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,90deg) scale3d(0,0,1);
  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,90deg) scale3d(0,0,1);
}

.hovereffect  hr:nth-child(4) {
  -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,180deg) scale3d(0,0,1);
  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1, 180deg) scale3d(0,0,1);
}

.hovereffect h2, .hovereffect hr {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-50%,-50%,0);
  transform: translate3d(-50%,-50%,0);
  -webkit-transform-origin: 50%;
  -ms-transform-origin: 50%;
  transform-origin: 50%;
  background-color: transparent;
  margin: 0px;
}

.set1, .set2 {
  left: 50%;
  position: absolute;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-50%,-50%,0);
  transform: translate3d(-50%,-50%,0);
  -webkit-transform-origin: 50%;
  -ms-transform-origin: 50%;
  transform-origin: 50%;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
}

.set1 {
  top: 35%;
}

.set2 {
  top: 50%;
}

.hovereffect p {
  width: 30%;
  text-transform: none;
  font-size: 15px;
  line-height: 2;
}

.hovereffect p a {
  color: #fff;
}

.hovereffect p a:hover,
.hovereffect p a:focus {
  opacity: 0.6;
  filter: alpha(opacity=60);
}

.hovereffect  a i {
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  padding: 10px;
  font-size: 20px;
}

.set1 a:first-child i {
  -webkit-transform: translate3d(-60px,-60px,0);
  transform: translate3d(-60px,-60px,0);
}

.set1 a:nth-child(2) i {
  -webkit-transform: translate3d(60px,-60px,0);
  transform: translate3d(60px,-60px,0);
}

.set2 a:first-child i {
  -webkit-transform: translate3d(-60px,60px,0);
  transform: translate3d(-60px,60px,0);
}

.set2 a:nth-child(2) i {
  -webkit-transform: translate3d(60px,60px,0);
  transform: translate3d(60px,60px,0);
}

.hovereffect:hover hr:nth-child(3) {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-90deg) scale3d(1,1,1);
  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-90deg) scale3d(1,1,1);
}

.hovereffect:hover hr:nth-child(4) {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-180deg) scale3d(1,1,1);
  transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-180deg) scale3d(1,1,1);
}

.hovereffect:hover .set1 i:empty, .hovereffect:hover .set2 i:empty {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  opacity: 1;
  filter: alpha(opacity=100);
}
</style>
