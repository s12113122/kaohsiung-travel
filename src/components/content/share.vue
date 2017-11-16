<template>
  <div>
    <el-row class="row" gutter="10">

      <el-col :xs="24" :sm="5">
        <div class="grid-content bg-purple">
          <div class="content-left">
            <div>
              <button class="btn-startup" type="text">搬家小撇步</button>
            </div>
            <img style="margin-top: 1.5rem" src="../../assets/untitled.png">
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8">
        <div class="content-right">
           <img src="../../assets/barcode.png">
           <h2 style="margin-left:1rem;">案 例 分 享</h2>
        </div>
        <div class="content-right-text">
          <span style="font-size: 26px; color:#c00;">搬家美事 案例分享</span>
          <div>
            <ol>
              <li>高雄市政府勞工局勞工教育生活中心
              <li>高雄縣衛生局倉庫搬遷
              <li>高雄縣大寮就業服務站搬遷承攬
              <li>高雄市立圖書館圖書分送運載
              <li>行政院農業委員會新化分所牛羊飼料運載
              <li>台南縣立圖書館遷移承攬
              <li>中研院史語所考古器具運載
              <li>美國在臺協會表演用展品搬運載送
              <li>高雄國際機場入出國及移民署資料清運
              <li>高雄世運表演展出道具搬運載送
              <li>台灣戲劇表演家表演展出道具搬運載送
              <li>台北曲藝團演出道具搬運搬運載送
              <li>台南梵羽藝術舞蹈團道具搬運載送
              <li>台灣技術劇場協會表演展出道具搬運載送
              <li>台灣豫劇團表演展出道具搬運載送
              <li>華碩電腦九如維修館搬遷承攬
              <li>中鋼前董事長郭董家庭搬遷承攬
              <li>兆全法律事務所搬遷承攬
              <li>南科生耀光電廠遷承攬
              <li>楊博科技高雄分公司遷移承攬
              <li>高雄鳳山瑞興牙醫診所劉醫師家庭搬遷
              <li>國軍總醫院醫師宿舍搬遷
              <li>恆春基督教醫院復健師搬遷
              <li>高雄醫院骨科開刀房護士搬遷
              <li>台南科技大學教職員室搬遷
              <li>國立中山大學戲劇系展覽道具搬運載送
              <li>樹德科技大學表演藝術系展覽道具搬運載送
              <li>高鳳數位內容學院遊戲藝術設計系展覽道具搬運載送
              <li>台東大學美術系畢業展覽道具搬運載送
              <li>屏東科技大學音樂系全國音樂比賽器材搬運載送
              <li>成功大學都市計畫學系物品搬運載送
              <li>國立中山大學政治經濟學系教授家庭搬遷
              <li>Kaohsiung American School-Amy老師家庭搬遷
              <li>Kaohsiung American School-Smith老師家庭搬遷
              <li>右昌國小教職員家庭搬遷
              <li>八卦國小教職員家庭搬遷
              <li>楠梓國中教職員家庭搬遷
              <li>鳳新高中英文老師-黃老師家庭搬遷
              <li>岡山教會韓國金牧師家庭搬遷
              <li>全聯福利中心光泉食品冰箱載運特約
              <li>塔非設計-科工館展覽撤場清運承攬
              <li>山芙蓉大飯店餐飲設備及廢棄家俱運載
              <li>力譔堂整合行銷道具搬運載送
              <li>克浚企業百貨公司展示進撤櫃
              <li>美商傑明工程顧問（股）實驗機具搬運
              <li>晶城環保廢棄物處理清除特約
              <li>金豐企業管理顧問公司搬遷
              <li>元大國際資產管理(股)公司搬運載送
              <li>聯地工程顧問有限公司搬運載送
              <li>群禾貿易有限公司搬運載送
              <li>派迪爾鐘錶(股)搬運載送
              <li>秉冠有限公司搬運載送
              <li>智睿設計展覽物品搬運載送
              <li>和正豐光電(股)物品搬運載送
              <li>中泱工程顧問(股)搬運載送
              <li>騰明科技(股)搬運載送
              <li>楓荷生物科技(股)搬運載送
              <li>吉的堡網路科技(股)搬運載送
              <li>漢星機械工程(股)搬運載送
              <li>高雄市小港區高松里里長鋼琴吊運
              <li>高雄市建國里里長家搬遷
              <li>住商不動產屏東自由店搬遷承攬
              <li>永慶不動產/東森不動產房仲客戶搬遷特約
              <li>善騰太陽能熱水器-高雄經銷商搬運特約</li>
            </ol>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.row {
  /* background-color: #777; */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.content-left {
  text-align: center;
  margin-top: 3rem;
}

.btn-startup {
  margin-top: 1rem;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  line-height: 1.5;
  padding: .5em 2em;
  border: none;
  background-image: linear-gradient(-180deg, #80D1F3 0%, #4A90E2 100%);
  box-shadow: 0 1px 2px 0 rgba(74, 144, 226, 0.44), 0 2px 8px 0 rgba(0, 0, 0, 0.14);
  border-radius: 50px;
}

.btn-startup:hover {
  cursor: pointer;
  transform: translateY(-1px);
  box-shadow: 0 3px 6px 0 rgba(74, 144, 226, 0.20), 0 4px 9px 0 rgba(0, 0, 0, 0.20);
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

.content-right-text {
  margin-top: 1rem;
}
</style>
