<template>
  <div class="testimonials">
    <div class="container ">
      <div class="row no-gutter product-bg">
        <div class="col-md-12  text-center newh2">商品介紹 product</div>
        <div class="col-lg-4 col-md-6 col-sm-6 text-center">
          <!-- <a href="images/work-1.jpg" class="work-box"> -->
          <div class="hovereffect">
            <img class="img-responsive work-box" src="../../assets/pexels.jpeg" alt="">
            <div class="overlay">
              <h2>{{userName}} </h2>
              <a class="info" href="#">link here</a>
            </div>
          </div>
          <!-- overlay -->
          <!-- </a> -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 text-center">
          <div class="hovereffect">
            <img class="img-responsive work-box" src="http://www.mountainliving.com.tw/upload/stowlcarousel/05fd61d9f6ea7815e77d4606b973e115.jpg" alt="">
            <div class="overlay">
              <h2>{{userName}} </h2>
              <a class="info" href="#">link here</a>
            </div>
          </div>
          <!-- overlay -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 text-center">
          <div class="hovereffect">
            <img class="img-responsive work-box" src="https://cf-zineblog.zi.org.tw/wp-content/uploads/2017/07/1499854955-d4780744c7be6c2d1ea9bb15bdba6381.jpg" alt="">
            <div class="overlay">
              <h2>{{userName}} </h2>
              <a class="info" href="#">link here</a>
            </div>
          </div>
          <!-- overlay -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 text-center">
          <div class="hovereffect">
            <img class="img-responsive work-box" src="https://cdn2.ettoday.net/images/2733/d2733247.jpg" alt="">
            <div class="overlay">
              <h2>{{userName}} </h2>
              <a class="info" href="#">link here</a>
            </div>
          </div>
          <!-- overlay -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 text-center">
          <div class="hovereffect">
            <img class="img-responsive work-box" src="https://eyeseenews.com/images/news/201703/thumbs/l_eyeseenews-153613010058cd4b1fd572b.jpg" alt="">
            <div class="overlay">
              <h2>{{userName}} </h2>
              <a class="info" href="#">link here</a>
            </div>
          </div>
          <!-- overlay -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 text-center">
          <div class="hovereffect">
            <img class="img-responsive work-box" src="http://www.mountainliving.com.tw/upload/stowlcarousel/3c2f31a0c38cb78ccf9a79469dd14d07.jpg" alt="">
            <div class="overlay">
              <h2>{{userName}} </h2>
              <a class="info" href="#">link here</a>
            </div>
          </div>
          <!-- overlay -->
        </div>
      </div>
      <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">6</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- test -->
      <div>
        <p>{{userName}}</p>
        <p>{{userPassword}}</p>
          <a href="#" class="btn" @click.prevent="getData">取得使用者資料</a>
      </div>
    </div>
  </div>
</template>

<script>

/* eslint-disable */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
export default {

  data() {
    return {
      userName: '',
      userPassword: ''
    };
  },
  created() {
      let mock = new MockAdapter(axios)
      let _this = this
      
      mock.onGet('/user?id=123').reply(200, {
        name: '經典木質桌椅',
        password: '123456789'
      });

      axios.get('/user?id=123').then(function(response) {
          _this.userName = response.data.name
          _this.userPassword = response.data.password
          // alert(`使用者姓名是 ${response.data.name}，密碼是 ${response.data.password}`)
        console.log(_this.userName );
        })
        .catch(function(error) {
          alert('取得資料失敗')
        })
  },
  methods: {
    
    getData: function() {
      let mock = new MockAdapter(axios)
      let _this = this
      
      mock.onGet('/user?id=123').reply(200, {
        name: 'John Smith',
        password: '123456789'
      });

      axios.get('/user?id=123').then(function(response) {
          // _this.userName = response.data.name
          // _this.userPassword = response.data.password
          alert(`使用者姓名是 ${response.data.name}，密碼是 ${response.data.password}`)
        console.log(_this.userName );
        })
        .catch(function(error) {
          alert('取得資料失敗')
        })
    },
  },
};
</script>
<style scoped>
.newh2 {
  margin: 3vh;
  font-family: 微軟正黑體;
  color: rgb(95, 96, 104);
  font-size: 32px;
  font-weight: bold;
}

.work-box {
  max-height: 650;
  max-width: 100%;
  margin: 20px 0
}

.work {
  background: rgba(232, 69, 69, 0.9);
}

.product-bg {
  /* background: rgba(232, 69, 69, 0.9); */
}

.testimonials {
  /* background: rgba(232, 69, 69, 0.9); 
  background-color: rgba(218, 216, 216, 0.61);*/
  background-image: url("../../assets/team_bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
}

.overlay-caption h4 {
  color: black;
}

.overlay-caption p {
  color: black;
}







/*---------------*/


/***** hover *****/


/*---------------*/

.hovereffect {
  max-width: 350px;
  max-height: 350px;
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all .4s linear;
  transition: all .4s linear;
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  background: rgba(0, 0, 0, 0.6);
  -webkit-transform: translatey(-100px);
  -ms-transform: translatey(-100px);
  transform: translatey(-100px);
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  padding: 10px;
}

.hovereffect a.info {
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  margin: 50px 0 0;
  padding: 7px 14px;
}

.hovereffect a.info:hover {
  box-shadow: 0 0 5px #fff;
}

.hovereffect:hover img {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
}

.hovereffect:hover h2,
.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-transform: translatey(0);
  -webkit-transform: translatey(0);
  transform: translatey(0);
}

.hovereffect:hover a.info {
  -webkit-transition-delay: .2s;
  transition-delay: .2s;
}
</style>
