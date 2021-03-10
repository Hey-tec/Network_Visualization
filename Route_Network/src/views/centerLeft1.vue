<template>
  <div id="centreRight1">
    <!-- 左上方组件的中间底板长宽 -->
    <div class="bg-color-black" style="margin-top:2.55rem;margin-left:0.22rem;height:3.6rem;width:5.6rem;">
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8">
          <icon name="chart-area"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-3" style="font-size: 13px;font-weight:bold;">当前国家AS数量及覆盖国家</span>
        </div>
      </div>
      <div class="d-flex jc-center" style="position:relative;top:-0.2rem;width: 6rem; height: 5rem;">
        <CentreLeft1Chart />
      </div>
      <!-- 4个主要的数据 -->
    </div>
  </div>
</template>

<script>
import CentreLeft1Chart from "@/components/echart/centerLeft/centerLeft1Chart";
export default {
  data() {
    return {
    };
  },
  components: {
    CentreLeft1Chart
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
#centreLeft1 {
  padding: 0.2rem;
  height: 5.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    position: absolute;
    height: 4.8125rem;
    width: 3.75rem;
    top: 3rem;
    border-radius: 0.125rem;
    left: 0.1rem;
  }
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

  .bottom-data {
    .item-box {
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      // 金币
      .coin {
        position: absolute;
        left: 0.1rem;
        top: 0.2125rem;
        font-size: 0.25rem;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
    }
  }
}
</style>