<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="4rem"
      width="5.25rem"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
// import echarts from 'echarts/lib/echarts';
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          axisPointer: {
              link: {
                  xAxisIndex: "all",
              },
          },
          tooltip: {
              show: true,
              trigger: "axis",
              axisPointer: {
                  type: "line",
                  lineStyle: {
                      type: "dashed",
                  },
              },
          },
          legend: {
            show: true,
            top: 20,
            left: 230,
          },
          grid: [{
                  left: 0,
                  right: 25,
                  top: "60px",
                  containLabel: true,
                  bottom: '50%',
              },
              {
                  left: 0,
                  containLabel: true,
                  right: 25,
                  top: '52%',
              },
          ],
          xAxis: [{
                  gridIndex: 0,
                  type: "category",
                  boundaryGap: false,
                  axisLine: {
                      onZero: false,
                  },
                  data: newData.xData,
              },
              {
                  gridIndex: 1,
                  type: "category",
                  position: 'top',
                  boundaryGap: false,
              },
          ],
          yAxis: [{
                  gridIndex: 0,
                  scale: true,
                  splitLine: {
                      show: false,
                  },
              },
              {
                  min: 0,
                  gridIndex: 1,
                  scale: true,
                  inverse: true,
                  splitLine: {
                      show: false,
                  },
              },
          ],
          series: [
              {
                  name: "AS数",
                  type: "line",
                  xAxisIndex: 0,
                  yAxisIndex: 0,
                  smooth: true,
                  itemStyle: {
                      color: "#FFB90F",
                  },
                  label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                          color: '#00b3f4',
                      }
                  },
                  data: newData.AS_Num_Data,
              },
              {
                  name: "覆盖国家数",
                  type: "line",
                  xAxisIndex: 1,
                  yAxisIndex: 1,
                  smooth: true,
                  itemStyle: {
                      color: "#228B22",
                  },
                  label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                          color: '#00b3f4',
                      }
                  },
                  data: newData.Nation_Num_Data,
              },
          ],
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>