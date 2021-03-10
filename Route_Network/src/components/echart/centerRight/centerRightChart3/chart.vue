<template>
  <div>
    <Echart
      :options="options"
      id="CentreRightChart3"
      position="absolute"
      height="3.8rem"
      width="6rem"

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
                // title: {
                // text: '2019年销售水量和主营业务收入对比',
                // textStyle: {
                //     align: 'center',
                //     color: '#fff',
                //     fontSize: 20,
                // },
                // top: '3%',
                // left: '10%',
                // },

        grid: {
            left: 50,
            right: 50,
            top: "60px",
            containLabel: true,
            bottom: '10%',//也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            data: ["销售水量", "主营业务"],
            top: "1%",
            left: "37%",
            textStyle: {
                color: "#ffffff"
            }
        },
        xAxis: {
            data: newData.x_Data,
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                            color: '#01FCE3'
                            }
            },
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac" //X轴文字颜色
                }
            },
            
        },
        yAxis: [{
                type: "value",
                name: "总路径数/条",
                nameTextStyle: {
                    color: "#ebf8ac"
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                                color: '#FFFFFF'
                                }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ebf8ac"
                    }
                },
                
            },
            {
                type: "value",
                name: "总节点数/万个",
                nameTextStyle: {
                    color: "#ebf8ac"
                },
                position: "right",
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: "{value} ", //右侧Y轴文字显示
                    textStyle: {
                        color: "#ebf8ac"
                    }
                }
            },
            {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                    }
                }
            }
        ],
        series: [{
                name: "总路径数",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 10, //标记的大小
                itemStyle: {
                    //折线拐点标志的样式
                    color: "#058cff"
                },
                lineStyle: {
                    color: "#058cff"
                },
                areaStyle:{
                    color: "rgba(5,140,255, 0.2)"
                },
                data: newData.line_Data
            },
            {
                name: "总节点数",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#00FFE3"
                            },
                            {
                                offset: 1,
                                color: "#4693EC"
                            }
                        ])
                    }
                },
                data: newData.bar_Data
            }
        ]
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