<template>
  <div id="centreRight2" style="position:absolute;left:-0.5rem;top:0.5rem;">
    <div class="bg-color-black" style="position:absolute;top:-.35rem;left:0.15rem;height:3rem;width:5.5rem;">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2" style="font-size: 15px;font-weight:bold;">网络分析图</span>
      </div>
      <div class="d-flex jc-center body-box">
        <CentreRight2Chart/>
      </div>
      <!-- <img :src="networkImg"  style="width:450px; height:280px"> -->
    </div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import CentreRight2Chart from "@/components/echart/centerRight/centerRightChart2";

export default {
  data() {
    return {
      // networkImg: require('@/assets/images/screenshot_193408.png')
    };
  },
  components: { CentreRight2Chart },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
#centreRight2 {
  padding: 0.0625rem;
  height: 10rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    padding: 0.0625rem;
    height: 5rem;
    width: 5rem;
    bottom: 4rem;
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