<template>
  <div class="container-fluid" style="
      padding-left: 0px;
      padding-right: 0px;">
    <div id="banner" data-video="images/banner" class="bg">
      <div>
        <div>
          <div class="container">
            <!-- class="col-md-10 col-md-offset-1"  -->
            <div class=" text-center">
              <h1> 三大準則 高品質 效率佳 服務周到</h1>
              <p>Life is real, life is earnest.</p>
            </div>
          </div>
          <video autoplay="" loop=""><source src="../../assets/video/Concrete_Jungle.mp4" type="video/mp4">
            <source src="../../assets/video/Concrete_Jungle.webm" type="video/webm">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  right: 0;
  left: 0;
}

.text-center {
  width: 50vw;
}

h1 {
  position: absolute;
  z-index: 10;
  /* margin: auto 0; */
  display: flex;
  /* width: 100%; */
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
}

.bg {
  width: auto;
  max-height: 750px;
  min-width: 100%;
  min-height: 100%;
  min-height: 750px;
  overflow: hidden;
}
</style>
