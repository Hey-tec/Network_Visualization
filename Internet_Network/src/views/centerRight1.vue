<template>
  <div id="centreRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">国家OSS统计结果</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="width: 3.75rem; height: 5rem" />
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
      currentIndex: 2012,
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
      // console.log('zizujian:', sessionStorage.getItem("currentIndex"));
      this.currentIndex = sessionStorage.getItem("currentIndex");
      this.dataFormat(this.currentIndex);
    });
  },
  methods: {
    dataFormat(Index) {
      Index = Index - 2012;
      var temp = []
      for (var i = 0; i < this.rankArray[Index].length; i++) {
        temp.push([this.rankArray[Index][i].countryName, this.rankArray[Index][i].count*11 + i]);
      }
      this.config = {
        header: ["国家", "数量"],
        data: temp,
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50],
        align: ["center"]
      }
      // console.log(this.config)
    },
  },
};
</script>

<style lang="scss">
#centreRight1 {
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