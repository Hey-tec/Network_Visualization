<template>
  <div>
    <Echart
      :options="options"
      id="CentreRightChart1"
      height="3.8rem"
      width="3rem"

    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import echarts from 'echarts/lib/echarts';

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
        //   backgroundColor:"rgba(41, 60, 85,.9)",
            color: ['#3dc5ff'], // 图例的颜色
            title: {
                // text: '雷达图'
            },
            
            // tooltip: {},
            legend: {
                top: 20,
                itemWidth: 12,
                itemHeight: 12,
                data: ['预算分配（Allocated Budget）'],
                textStyle: {
                    color: '#fff'
                }
            },
            radar: {
                name: { // 每个角的字体颜色
                    textStyle: {
                        color: '#D3D3D3',
                        fontWeight:'bold',
                        fontSize: 10,
                    }
                },
                radius: 70,
                startAngle: 60,
                axisLine: {
                    lineStyle: {
                        color: '#3c4462',
                    }, // 背景网格线颜色
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: ['#3c4462']
                        // 图表背景网格线的颜色
                    }
                },
                splitArea: { // 雷达图背景颜色
                    areaStyle: {
                        color: ['#061037']
                    }
                },
                indicator: newData.indicatorData,
            },
            series: [{
                name: '',
                type: 'radar',
                symbolSize: 4,
                itemStyle: {
                    
                    emphasis: {
                        // color: 各异,
                        lineStyle: { // 鼠标移上的网边框样式
                            width: 4
                        }
                    },
                },
                areaStyle: { // 雷达网区域样式设置
                        normal: {
                            opacity: 0.9,
                            color: new echarts.graphic.RadialGradient(0.5,
                                0.5, 1, [{
                                    color: '#32CD32',
                                    offset: 0
                                }, {
                                    color: '#00FF00',
                                    offset: 0.3
                                }])
                        }
                    },
                data: [{
                    value: newData.data_test,
                    name: '',
                }]
            },
            {
             type: 'radar',
             data: [
                 [1000, 1000, 1000, 1000, 1000, 1000],
             ],
             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.06
             }
         },
         {
             type: 'radar',
             data: [
                 [900, 900, 900, 900, 900, 900],
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#2C72C8'
             },

             areaStyle: {
                 color: '#2C72C8',
                 opacity: 0.12
             }
         },
         {
             type: 'radar',
             data: [
                 [800, 800, 800, 800, 800, 800]
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.18
             }
         },
         {
             type: 'radar',
             data: [
                 [700, 700, 700, 700, 700, 700]
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.19
             }
         },
         {
             type: 'radar',
             data: [
                 [600, 600, 600, 600, 600, 600],
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.17
             }
         },
         {
             type: 'radar',
             data: [
                 [500, 500, 500, 500, 500, 500],
             ],
             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.16
             }
         },
         {
             type: 'radar',
             data: [
                 [400, 400, 400, 400, 400, 400],
             ],

             symbol: 'none',
             lineStyle: {
                 width: 0
             },
             itemStyle: {
                 color: '#4175F5'
             },

             areaStyle: {
                 color: '#4175F5',
                 opacity: 0.13
             }
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