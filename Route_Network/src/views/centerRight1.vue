<template>
  <div id="centreRight1" style="position:absolute;top:0.3rem;left:-0.6rem;">
    <!-- <div class="bg-color-black" style="position:absolute;left:-0.3rem;top:0.15rem;height:3.4rem;width:5.5rem;"> -->
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2" style="font-size: 15px;font-weight:bold;">各国网络能力分析</span>
      </div>
      <div class="d-flex jc-center body-box" style="position:absolute;left:-0.5rem;top:0rem;">
        <CentreRightChart1/>
      </div>
      <img alt='地球' className='earth-gif' :src="require('@/assets/images/earth-rotate.gif')" style="position:absolute;right:-2rem;top:0.8rem;width:2.3rem;"/>
    <!-- </div> -->
  </div>
</template>

<script>
import CentreRightChart1 from "@/components/echart/centerRight/centerRightChart";

export default {
  data() {
    return {
      countryName: 'China',
      ydata:[],
      config: null
    };
  },
  components: { CentreRightChart1 },
  mounted() {
    
  },
  methods: {
  }
};
</script>
<style lang="scss">
#centreRight1 {
  padding: 0.0625rem;
  height: 5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    padding: 0.0625rem;
    height: 4.5rem;
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