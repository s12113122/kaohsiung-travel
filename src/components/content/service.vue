<template>
  <div class="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-md-12  text-center newh2">服務項目 services</div>
        <div class="col-md-3 col-sm-6   feature text-center">
           <a  class="nav-link" href="http://babacar.digipack-develop.com/" target="_blank" >
            <div>
              <img class="img-ic" src="../../assets/truck.png" alt="">
            </div>
            <div class="feature-content">
              <h5>三噸半貨車</h5>
              <p>適用於個人家庭搬遷．雨天使用 <br> 市區搬家建議使用3.5噸車型，較不影響道路及鄰居通行。
              </p>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6  offset-md-1 feature text-center">
     <a  class="nav-link" href="http://babacar.digipack-develop.com/" target="_blank" >
            <div>
              <img class="img-ic" src="../../assets/truck2.png" alt="">
            </div>
            <div class="feature-content">
              <h5>三噸半加長貨車</h5>
              <p>適用於個人家庭搬遷．雨天使用 <br> 市區搬家建議使用3.5噸車型，較不影響道路及鄰居通行。
              </p>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6  offset-md-1 feature text-center">
     <a  class="nav-link" href="http://babacar.digipack-develop.com/" target="_blank" >
          <div>
            <img class="img-ic" src="../../assets/truck3.png" alt="">
          </div>
          <div class="feature-content">
            <h5>六噸貨車</h5>
            <p> 適用於全省中長距離搬家、公司機關中型搬遷、東部山區偏遠搬遷
            </p>
          </div>
           </a>
        </div>
        <div class="col-md-3 col-sm-6   feature text-center">
     <a  class="nav-link" href="http://babacar.digipack-develop.com/" target="_blank" >
          <div>
            <img class="img-ic" src="../../assets/truck4.png" alt="">
          </div>
          <div class="feature-content">
            <h5>八噸貨車</h5>
            <p>長途跨縣市搬家、公司搬家建議使用六噸車以上。
            </p>
          </div>
           </a>
        </div>
        <div class="col-md-3 col-sm-6  offset-md-1 feature text-center">
     <a  class="nav-link" href="http://babacar.digipack-develop.com/" target="_blank" >
          <div>
            <img class="img-ic" src="../../assets/truck5.png" alt="">
          </div>
          <div class="feature-content">
            <h5>十五噸貨車</h5>
            <p>適用於全省長距離搬家、公司機關大型搬遷、展覽活動佈展運送
            </p>
          </div>
           </a>
        </div>
        <!-- <div class="col-md-4 col-sm-6 feature text-center">
                          <span class="icon icon-download"></span>
                          <div class="feature-content">
                              <h5>Download for Free</h5>
                              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.</p>
                          </div>
                      </div> -->
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.testimonials {
  background-image: url("https://images.pexels.com/photos/226460/pexels-photo-226460.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.img-ic {
  transition: 2s ease-in-out;
}

.img-ic:hover {
  transform: translateX(4000px);
}

.container {}

.newh2 {
  margin: 3vh;
  font-family: 微軟正黑體;
  color: rgb(95, 96, 104);
  font-size: 32px;
  font-weight: bold;
}

.feature {
  border-style: inset;
  padding: 50px 0;
  margin-bottom: 20px;
}

.feature-content {
  padding: 0 15px;
  margin-top: 30px;
}

.copyrights {
  text-indent: -9999px;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}

h5 {
  font-size: 24px;
  color: #5a1d1d;
}

p {
  margin-top: 20px;
  font-size: 16px;
  color: black;
}
</style>
