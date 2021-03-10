<template>
  <div id="centerLeft3" style="width:5rem;">
    <div class="bg-color-black" style="position: absolute;top:0.27rem;left:0.5rem;width:5.6rem;height:6.93rem;">
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8;">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2" style="font-size: 15px;font-weight:bold;">世界AS数量排名</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="top:0.2rem;width: 5.3rem; height: 6.3rem" />
      </div>
    </div>
  </div>
</template>

<script>
import rank2012 from "../../public/json/2012/rank_2012.json";
import rank2013 from "../../public/json/2013/rank_2013.json";
import rank2014 from "../../public/json/2014/rank_2014.json";
import rank2015 from "../../public/json/2015/rank_2015.json";
import rank2016 from "../../public/json/2016/rank_2016.json";
import rank2017 from "../..//public/json/2017/rank_2017.json";
export default {
  props: ["currentcountry"],

  data() {
    return {
      cdata: [],
      currentIndex: 2015,
      rankArray: [
        rank2012,
        rank2013,
        rank2014,
        rank2015, 
        rank2016,
        rank2017
      ],
      config: null,
    };
  },
  watch: {},
  components: {},
  mounted() {
    window.addEventListener("setItem", () => {
      this.currentIndex = sessionStorage.getItem("currentIndex");
      this.dataFormat(this.currentIndex);
    });
  },
  methods: {
    dataFormat(Index) {
      Index = Index - 2015;
      var temp = []
      for (var i = 0; i < this.rankArray[Index].length; i++) {
        temp.push([this.rankArray[Index][i].countryName, this.rankArray[Index][i].date, this.rankArray[Index][i].count]);
      }
      this.config = {
        header: ['国家', '时间', 'AS总数'],
        data: temp,
        rowNum: 9, //表格行数
        headerHeight: 40,
        headerBGC: "#443dc5",   //表头
        oddRowBGC: "#0f1325",   //奇数行
        evenRowBGC: "#171c33",  //偶数行
        index: true,
        indexHeader: '序号',    // 行号表头
        columnWidth: [50, 150, 150],
        align: ["center"]
      }
      // console.log("test....")
    },
  },
};
</script>

<style lang="scss">
#centerLeft3 {
  padding: 0.4rem;
  height: 5.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>