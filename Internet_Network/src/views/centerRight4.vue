<template>
  <div id="centreRight2">
    <div class="bg-color-black" style="margin-top: 2.6rem;height:4rem">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2">OSS人员统计比例</span>
      </div>
      <div class="d-flex jc-center body-box" style=" margin-top: 0rem;">
        <CentreLeft1Chart/>
      </div>
    </div>
  </div>
</template>

<script>
import CentreLeft1Chart from "@/components/echart/centerLeft/centerLeft1Chart";

export default {
  data() {
    return {
      countryName: 'China',
      ydata:[],
      config: null
    };
  },
  components: { CentreLeft1Chart },
  mounted() {
    
  },
  methods: {
  }
};
</script>

<style lang="scss">
#CentreLeft1Chart {
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