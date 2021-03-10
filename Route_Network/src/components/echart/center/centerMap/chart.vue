<template>
  <div id="worldMap">
    <Echart
      id="centreLeft2Chart"
      ref="centreLeft2ChartRef"
      class="echartsMy"
      :options="option"
      height="11.5rem"
      width="13rem"
    >
    </Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart";
import "E:/Java Coding/Visualization/Vue/node_modules/echarts/map/js/world.js";
import mapData from "../../../../../public/data_json/nation.json";
import getColor from "../../../../../public/data_json/color.json";
import getDependent2012 from "../../../../../public/json/2012/dependent.json";
import getDependent2013 from "../../../../../public/json/2013/dependent_2013.json";
import getDependent2014 from "../../../../../public/json/2014/dependent_2014.json";
import getDependent2015 from "../../../../../public/json/2015/dependent_2015.json";
import getDependent2016 from "../../../../../public/json/2016/dependent_2016.json";
import getDependent2017 from "../../../../../public/json/2017/dependent_2017.json";
import centerRight from "../../centerRight/centerRightChart/chart";
// import Vue from "vue";

export default {
  components: {
    Echart,
    centerRight,
    // centerLeft1Chart
  },
  
  data() {
    return {
      option_new: { series: {} },

      cn_year_dependent: []
    };
  },
  props: {
    cdata: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    cdata: {
      handler() {
        var dependentTotal = [];
        var nationmapdata = [];
        var geocolor = [];
        dependentTotal.push(getDependent2012);
        dependentTotal.push(getDependent2013);
        dependentTotal.push(getDependent2014);
        dependentTotal.push(getDependent2014);
        dependentTotal.push(getDependent2015);
        dependentTotal.push(getDependent2016);
        dependentTotal.push(getDependent2017);
        nationmapdata.push(mapData);
        
        for(var i=0; i<getColor.length; i++ ) {
          geocolor.push(getColor[i].data)
        }

        this.option = {
          baseOption: {
            timeline: {
              axisType: "category",
              show: true,
              data: ["2015", "2016", "2017", "2018", "2019", "2020"],
              bottom: "15%",
              autoPlay: false,
              playInterval: 5000,
              label: {
                  normal: {
                      textStyle: {
                          color: 'rgb(179, 239, 255)'
                      }
                  },
                  emphasis: {
                      textStyle: {
                          color: '#fff'
                      }
                  }
              },
              symbolSize: 10,
              lineStyle: {
                  color: '#8df4f4'
              },
              checkpointStyle: {
                  borderColor: '#8df4f4',
                  color: '#53D9FF',
                  borderWidth: 2,
              },
              controlStyle: {
                  showNextBtn: true,
                  showPrevBtn: true,
                  normal: {
                      color: '#53D9FF',
                      borderColor: '#53D9FF'
                  },
                  emphasis: {
                      color: 'rgb(58,115,192)',
                      borderColor: 'rgb(58,115,192)'
                  }
              },
            },
          },
          options: [
            {
              title: {
                text: "",
                x: "center",
                t: "top",
                top:"180rem",
                textAlign: "left",
                textStyle: {
                        // color: 'rgb(179, 239, 255)',   // 地图名称
                        fontSize: 16
                    },
              },

              tooltip: {          // 实现鼠标放在地图某一国家上，改变组件数据
                trigger: "item",
                
              },
              geo: {
                    show: true,
                    name:'world',
                    map: 'world',
                    roam: false,
                    zoom: 1,
                    center: [10, 20],
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: (p) => {
                          let val = p.value[2];
                          if (window.isNaN(val)) {
                              val = 0;
                          }
                          let txtCon =
                              "<div style='text-align:left'>" + p.name + ":<br />AS数量：" + val.toFixed(0) + '</div>';
                          return txtCon;
                      }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',   // 地图边界颜色
                            borderWidth: 0.8,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',      // 地图初始颜色
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 30
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    }
                },

              roamController: {
                show: true,
                x: "right",
                mapTypeControl: {
                  world: true,
                },
              },
              visualMap: {
                min: 5,
                max: 5000,
                text: ["High", "Low"],
                textStyle: {},
                realtime: true,
                calculable: true,
                inRange: {
                  color: ["lightskyblue", "yellow", "orangered"],
                },
                bottom: "15%",
                left: "5%",
              },
              series: [
                {
                  name:"world",
                  type: "map",
                  mapType: "world",
                  bg_color: "#FFFAFA",
                  center: [10, 20],
                  roam: false,
                  label: {
                    show: false,
                  },
                  
                  tooltip: {
                        trigger: "item",
                        formatter: p => {
                            let val = p.value;
                            let txtCon =
                                "<div style='text-align:left'>" + p.name + ":<br />AS数量：" + val.toFixed(0) + '</div>';
                            return txtCon;
                        }
                    },

                  itemStyle: {
                    shadowColor: "rgba(7,114,204, .8)",
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    areaColor: "#00aeef",
                    shadowBlur: 5,
                    // shadowColor: "#111",
                    // borderColor: "#111",
                  },
                  emphasis: {
                    label: {
                      show: true,
                    },
                    itemStyle: {
                      areaColor: "#00aeef",
                    },
                  },
                  data: geocolor[0],
                },
              ],
            },
            {
              series: [
                {
                  name: "2013国家OSS统计结果",
                  type: "map",
                  mapType: "world",
                  bg_color: "#FFFAFA",
                  roam: true,
                  label: {
                    show: false,
                  },
                  itemStyle: {
                    shadowColor: "rgba(7,114,204, .8)",
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    areaColor: "#00aeef",
                    shadowBlur: 5,
                    // shadowColor: "#111",
                    // borderColor: "#111",
                  },
                  emphasis: {
                    label: {
                      show: true,
                    },
                    itemStyle: {
                      areaColor: "#00aeef",
                    },
                  },
                  data: geocolor[1],
                },
              ],
            },
            {
              series: [
                {
                  name: "2014国家OSS统计结果",
                  type: "map",
                  mapType: "world",
                  bg_color: "#FFFAFA",
                  roam: true,
                  label: {
                    show: false,
                  },
                  itemStyle: {
                    shadowColor: "rgba(7,114,204, .8)",
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    areaColor: "#00aeef",
                    shadowBlur: 5,
                    // shadowColor: "#111",
                    // borderColor: "#111",
                  },
                  emphasis: {
                    label: {
                      show: true,
                    },
                    itemStyle: {
                      areaColor: "#00aeef",
                    },
                  },
                  data: geocolor[2],
                },
              ],
            },
            {
              series: [
                {
                  name: "2015国家OSS统计结果",
                  type: "map",
                  mapType: "world",
                  bg_color: "#FFFAFA",
                  roam: true,
                  label: {
                    show: false,
                  },
                  itemStyle: {
                    shadowColor: "rgba(7,114,204, .8)",
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    areaColor: "#00aeef",
                    shadowBlur: 5,
                    // shadowColor: "#111",
                    // borderColor: "#111",
                  },
                  emphasis: {
                    label: {
                      show: true,
                    },
                    itemStyle: {
                      areaColor: "#00aeef",
                    },
                  },
                  data: geocolor[3],
                },
              ],
            },
            {
              series: [
                {
                  name: "2016国家OSS统计结果",
                  type: "map",
                  mapType: "world",
                  bg_color: "#FFFAFA",
                  roam: true,
                  label: {
                    show: false,
                  },
                  itemStyle: {
                    shadowColor: "rgba(7,114,204, .8)",
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    areaColor: "#00aeef",
                    shadowBlur: 5,
                    // shadowColor: "#111",
                    // borderColor: "#111",
                  },
                  emphasis: {
                    label: {
                      show: true,
                    },
                    itemStyle: {
                      areaColor: "#00aeef",
                    },
                  },
                  data: geocolor[4],
                },
              ],
            },
            {
              series: [
                {
                  name: "2017国家OSS统计结果",
                  type: "map",
                  mapType: "world",
                  bg_color: "#FFFAFA",
                  roam: true,
                  label: {
                    show: false,
                  },
                  itemStyle: {
                    shadowColor: "rgba(7,114,204, .8)",
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    areaColor: "#00aeef",
                    shadowBlur: 5,
                    // shadowColor: "#111",
                    // borderColor: "#111",
                  },
                  emphasis: {
                    label: {
                      show: true,
                    },
                    itemStyle: {
                      areaColor: "#00aeef",
                    },
                  },
                  data: geocolor[5],
                },
              ],
            },
          ],
        };
        // 重新选择区域
        this.handleMapRandomSelect();
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
