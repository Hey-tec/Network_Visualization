<template>
  <div id="centreMap">
    <!-- <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">地图数据</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
    </div> -->
    <div class="d-flex jc-center" @click="out" style="width:1rem;top:0rem;position:absolute;">
        <CentreMapChart @ref="change"/>
      </div>
  </div>
</template>

<script>
import CentreMapChart from "@/components/echart/center/centerMap";
export default {
  data() {

    return {};
  },
  components: {
    CentreMapChart
  },
  mounted() {},
  methods: {
    out(){
    },
    change(data){
      console.log(data)
    }
  }
};
</script>

<style lang="scss">
#centreMap {
  padding: 4.25rem;
  left: 1rem;
  height: 5.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  // .bg-color-black {
  //   height: 4.8125rem;
  //   border-radius: 0.125rem;
  // }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>