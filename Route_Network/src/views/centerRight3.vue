<template>
  <div id="centreRight3">
    <div class="bg-color-black" style="margin-top: 2.6rem;margin-left:0.1rem;height:4rem;width:5.5rem;">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2" style="font-size: 15px;font-weight:bold;">历年数据统计表</span>
      </div>
      <div class="d-flex jc-center body-box" >
        <CentreRight3Chart/>
      </div>
    </div>
  </div>
</template>

<script>
import CentreRight3Chart from "@/components/echart/centerRight/centerRightChart3";

export default {
  data() {
    return {
      countryName: 'China',
      ydata:[],
      config: null
    };
  },
  components: { CentreRight3Chart },
  mounted() {
    
  },
  methods: {
  }
};
</script>

<style lang="scss">
#centreRight3 {
  padding: 0.0625rem;
  min-width: 5rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    position: absolute;
    padding: 0.0625rem;
    height: 4rem;
    width: 5rem;
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