<template>
  <div>
    <el-row>
      <el-col :xs="5" :sm="5" :offset="5">
        <div class="content-left">
          <div>
             <button class="btn-startup" type="text">搬家小撇步</button>
          </div>
          <img style="margin-top: 1.5rem" src="../../assets/untitled.png">
        </div>
      </el-col>
      <el-col :xs="8" :sm="8">
        <div class="content-right">
           <img src="../../assets/sell-product.png">
           <h2 style="margin-left:1rem;">搬家知識庫</h2>
        </div>
        <div class="IMG"></div>
        <div class="IMG-2"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.IMG {
  background: url(../../assets/aa.jpg) no-repeat;
  background-size: 35vw 70vh;
  background-repeat: no-repeat;
  height: 75vh;

}
.IMG-2 {
  background: url(../../assets/bb.jpg) no-repeat;
  background-size: 35vw 70vh;
  background-repeat: no-repeat;
  height: 75vh;

}

.content-left {
  margin-top: 3rem;
  text-align: center;
}

.btn-left {
  margin-top: 0.5rem;
  /* height: 3rem; */
  text-align: left;
  font-size: 18px;
  border: 0;
  border-radius: 30px;
}
.btn-startup{
  margin-top: 1rem;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.18);
  line-height: 1.5;
  padding: .5em 2em;
  border: none;
  background-image: linear-gradient(-180deg, 	#80D1F3 0%, #4A90E2 100%);
  box-shadow: 0 1px 2px 0 rgba(74,144,226,0.44), 	0 2px 8px 0 rgba(0,0,0,0.14);
  border-radius: 50px;
} 

.btn-startup:hover {
  cursor:pointer;
  transform: translateY(-1px);
  box-shadow: 0 3px 6px 0 rgba(74,144,226,0.20), 0 4px 9px 0 rgba(0,0,0,0.20);
}
.fa-long-arrow-right {
  color: #0066FF;
}

.content-right {
  margin-top: 3rem;
  padding-bottom: 5px;
  /* border-left-style: solid; */
  border-bottom-style: dotted;
  border-bottom-color: #0066FF;
  display: flex;
  /* background-color: #777777; */
}
</style>
