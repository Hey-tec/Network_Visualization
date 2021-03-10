<template>
  <div id="centreRight1">
    <div class="bg-color-black" style="margin-top: 2.25rem;height:4rem;width:100%;">
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">OSS项目数</span>
          <dv-decoration-3
            style="
              width: 1.25rem;
              height: 0.25rem;
              position: relative;
              top: -0.0375rem;
            "
          />
        </div>
      </div>
      <div class="d-flex jc-center" style="width: 3.75rem; height: 3rem">
        <CentreLeft1Chart />
      </div>
      <!-- 4个主要的数据 -->
    </div>
  </div>
</template>

<script>
import CentreLeft1Chart from "@/components/echart/centerLeft/centerLeft1ChartPlus";
export default {
  data() {
    return {
    };
  },
  components: {
    CentreLeft1Chart
  },
  mounted() {
    this.changeTiming();
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        this.changeNumber();
      }, 3000);
    },
    changeNumber() {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index;
        item.number = { ...item.number };
      });
    }
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