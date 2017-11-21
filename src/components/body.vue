<template>
  <div class="container">

    <h1>搜尋: EX:小港區 </h1>
    <div>
      <input type="text" v-model="filter" placeholder="輸入過濾區域">
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h4>共有{{filteredRows.length}}個景點</h4>
      </div>
      <div class="newsItem col-12 col-sm-6 col-md-4 col-lg-4 " v-for="(r, index) in filteredRows.slice(pageStart, pageStart + countOfPage)">
        <div class="card">
          <div class="card-block">

            <div class="image">
              <img v-bind:src="r.Picture1" />
            </div>
            <h2>景點名稱：{{r.Name}}</h2>
            <div class="summary">
              <p>
                <b>地址：{{r.Add}}</b>
                <p>
                  <p>
                    <b>電話：{{r.Tel}}</b>
                  </p>
                  <p>
                    <b>時間:{{r.Opentime}}</b>
                  </p>
                  <button type="button" class="btn btn-success" data-toggle="modal" v-bind:data-target="'#'+r.Id">
                    景點介紹
                  </button>
                  <!-- Modal -->
                  <div class="col-sm-12">
                    <div class="modal fade" v-bind:id="r.Id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" style="font-family: cursive;    color: aliceblue; "id="exampleModalLongTitle">{{r.Name}}</h4>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="image">
                              <img v-bind:src="r.Picture1" />
                            </div>
                            <div class="">
                              <span style="font-size:18px;">景點介紹:</span>
                              <p>{{r.Toldescribe}}</p>
                              <p>地址:{{r.Add}}</p>
                              <p>電話:{{r.Tel}}</p>
                              <p>時間:{{r.Opentime}}</p>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-bind:class="{'disabled': (currPage === 1)}" @click.prevent="setPage(currPage-1)">
          <a class="page-link" href="#">Prev</a>
        </li>
        <li class="page-item" v-for="n in totalPage" v-bind:class="{'active': (currPage === (n))}" @click.prevent="setPage(n)">
          <a class="page-link" href="#">{{n}}</a>
        </li>
        <li class="page-item" v-bind:class="{'disabled': (currPage === totalPage)}" @click.prevent="setPage(currPage+1)">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  data() {
    return {
      items: [],
      posts: [],
      countOfPage: 15,
      currPage: 1,
      filter: '',
    }
  },
  computed: {
    filteredRows: function() {
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 filter_name 與 rows[n].name 通通轉小寫方便比對。
      let filter = this.filter.toLowerCase();

      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 rows 回傳。
      return (this.filter.trim() !== '') ?
        this.items.filter(function(d) { return d.Add.toLowerCase().indexOf(filter) > -1; }) :
        this.items;
    },
    pageStart: function() {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function() {
      return Math.ceil(this.filteredRows.length / this.countOfPage);
    }
  },
  created() {
    this.getjson();
  },
  methods: {
    setPage: function(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
    async getjson() {
      try {
        const json = await axios.get('https://data.kaohsiung.gov.tw/opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=1&FileType=1&Lang=C&FolderType=');
        this.items = json.data;
        console.log(json.data);
      } catch (e) {
        console.log(e);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-header {
  background-color: #42ab9e;
  text-align: center;
}

.row {
  margin-top: 30px;
}

.newsItem {
  margin-bottom: 30px;
}

.card {
  background: #f3f3f3;
  border: 1px solid #eeeeee;
  /* additional css to equalize the cards */
  display: table;
  table-layout: fixed;
  height: 100%;
}

.image img {
  width: 100%;
  height: 30vh;
  background-size: cover;
}

h2 {
  text-align: left;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
  padding-top: 10px;
}

.image {
  background: #000;
}

.summary p {
  text-align: left;
  font: Arial, sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #666;
}

a:hover,
a:focus {
  text-decoration: none;
}

a:hover .summary p,
a:focus .summary p {
  color: #333;
}

a:hover img {
  opacity: 0.8;
}

.photoCredits {
  margin-top: 50px;
}

.photoCredits h4 {
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
}
</style>
