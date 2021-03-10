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
// import world from 'echarts/map/json/world.json';
import world from "../../../../common/map/world.json";
echarts.registerMap("world", world);
import echarts from "echarts";
// import {geoCoordMap} from "../../../../common/map/worldlocation.js";
import getDependent2012 from "../../../../../public/json/2012/dependent.json";
import getDependent2013 from "../../../../../public/json/2013/dependent_2013.json";
import getDependent2014 from "../../../../../public/json/2014/dependent_2014.json";
import getDependent2015 from "../../../../../public/json/2015/dependent_2015.json";
import getDependent2016 from "../../../../../public/json/2016/dependent_2016.json";
import getDependent2017 from "../../../../../public/json/2017/dependent_2017.json";
import centerRight from "../../centerRight/centerRightChart/chart";
// import { directive } from "vue/types/umd";
import Vue from "vue";
export default {
  components: {
    Echart,
    centerRight,
    // centerLeft1Chart
  },
  data() {
    return {
      option_new: { series: {} },
      geoCoordMapName: [
        "cn",
        "fr",
        "au",
        "sg",
        "fi",
        "gb",
        "de",
        "nl",
        "us",
        "ch",
        "jp",
        "at",
        "ca",
        "ru",
        "dk",
        "it",
        "br",
        "ua",
        "pt",
        "tw",
        "mx",
      ],
      geoCoordMap: [
        { point: ["35.0000", "105.0000"] },
        { point: ["46.0000", "2.0000"] },
        { point: ["-27.0000", "133.0000"] },
        { point: ["1.3667", "103.8000"] },
        { point: ["64.0000", "26.0000"] },
        { point: ["54.0000", "-2.0000"] },
        { point: ["51.0000", "9.0000"] },
        { point: ["52.5000", "5.7500"] },
        { point: ["38.0000", "-97.0000"] },
        { point: ["47.0000", "8.0000"] },
        { point: ["36.0000", "138.0000"] },
        { point: ["47.3333", "13.3333"] },
        { point: ["60.0000", "-95.0000"] },
        { point: ["60.0000", "100.0000"] },
        { point: ["56.0000", "10.0000"] },
        { point: ["42.8333", "12.8333"] },
        { point: ["-10.0000", "-55.0000"] },
        { point: ["49.0000", "32.0000"] },
        { point: ["39.5000", "-8.0000"] },
        { point: ["23.5000", "121.0000"] },
        { point: ["23.0000", "-102.0000"] },
      ],
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
        var countryDictArray = [];
        var colorData = [];
        var markedIndex = [3, 10, 20, 30, 40, 50];
        var countryArray = [];
        var totalCountry = [];
        var dependentTotal = [];
        dependentTotal.push(getDependent2012);
        dependentTotal.push(getDependent2013);
        dependentTotal.push(getDependent2014);
        dependentTotal.push(getDependent2014);
        dependentTotal.push(getDependent2015);
        dependentTotal.push(getDependent2016);
        dependentTotal.push(getDependent2017);

        for (var year = 0; year < 6; year++) {
          var countryDict = new Array();
          var indexMark = 0;
          var value = 50000;
          var referenceCountry = new Set();
          var countrySet = new Set();
          var dependent = dependentTotal[year];
          console.log(dependent);
          for (var j = 0; j < world.features.length; j++) {
            var tmpName = world.features[j].properties.name;
            totalCountry.push(tmpName);
          }

          for (var i = 0; i < dependent.length; i++) {
            var link = dependent[i].link;
            var count = dependent[i].count;
            for (var t = 0; t < count; t++) {
              countryArray.push(link[0]);
              countryArray.push(link[1]);
            }
          }

          for (i = 0; i < countryArray.length; i++) {
            if (countrySet.has(countryArray[i])) {
              countryDict[countryArray[i]]++;
            } else {
              countryDict[countryArray[i]] = 1;
              countrySet.add(countryArray[i]);
            }
          }

          var sortedDict = Object.keys(countryDict).sort(function (a, b) {
            return countryDict[b] - countryDict[a];
          });
          var sortedArray = [];
          for (var key in sortedDict) {
            sortedArray.push(sortedDict[key]);
          }

          var colorDataTmp = [];

          for (i = 0; i < sortedArray.length; i++) {
            if (i === markedIndex[indexMark] - 1) {
              value = value - 5000;
              indexMark++;
            } else {
              referenceCountry.add(sortedArray[i]);
              colorDataTmp.push({ name: sortedArray[i], value: value });
            }
          }

          for (i = 0; i < totalCountry.length; i++) {
            if (!referenceCountry.has(totalCountry[i])) {
              colorDataTmp.push({ name: totalCountry[i], value: 10 });
            }
          }
          colorData.push(colorDataTmp);
          countryDictArray.push(countryDict);
        }

        this.option = {
          baseOption: {
            timeline: {
              axisType: "category",
              show: true,
              data: ["2012", "2013", "2014", "2015", "2016", "2017"],
              bottom: "15%",
              autoPlay: false,
              playInterval: 1000,
            },
          },
          options: [
            {
              title: {
                text: "World OSS Map",
                x: "center",
                t: "top",
                textAlign: "left",
              },
              tooltip: {
                trigger: "item",
                formatter: function (params) {
                  var pointCountry = params.data.name;
                  
                  Vue.prototype.resetSetItem("countryName", pointCountry);
                  
                },
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
                max: 50000,
                text: ["High", "Low"],
                textStyle: {},
                realtime: false,
                calculable: true,
                inRange: {
                  color: ["lightskyblue", "yellow", "orangered"],
                },
                bottom: "15%",
                left: "5%",
              },
              series: [
                {
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
                  data: colorData[0],
                }
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
                  data: colorData[1],
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
                  data: colorData[2],
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
                  data: colorData[3],
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
                  data: colorData[4],
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
                  data: colorData[5],
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
  methods: {},
  mounted() {
    var container = document.getElementById("centreLeft2Chart");
    var chart = this.$echarts.init(container);
    // console.log(chart)
    chart.on("timelinechanged", function (params) {
      var currentIndex = params.currentIndex + 2012;
      // sessionStorage.setItem("currentIndex", currentIndex);
      Vue.prototype.resetSetItem("currentIndex", currentIndex);

      this.cn_year_dependent.push([
        ["fr", 1],
        ["au", 1],
        ["sg", 2],
        ["fi", 2],
        ["gb", 5],
        ["de", 5],
        ["nl", 6],
        ["us", 50],
      ]);
      this.cn_year_dependent.push([
        ["fr", 4],
        ["de", 5],
        ["jp", 10],
        ["at", 11],
        ["ca", 11],
        ["nl", 25],
        ["ch", 26],
        ["dk", 36],
        ["gb", 76],
        ["us", 256],
      ]);
      this.cn_year_dependent.push([
        ["ca", 13],
        ["fr", 21],
        ["ru", 21],
        ["fi", 34],
        ["dk", 50],
        ["nl", 55],
        ["at", 96],
        ["it", 141],
        ["gb", 199],
        ["us", 256],
      ]);
      this.cn_year_dependent.push([
        ["it", 22],
        ["ca", 23],
        ["fr", 25],
        ["ru", 36],
        ["nl", 38],
        ["fi", 48],
        ["dk", 69],
        ["at", 157],
        ["gb", 401],
        ["us", 452],
      ]);
      this.cn_year_dependent.push([
        ["br", 45],
        ["ua", 46],
        ["ru", 49],
        ["ch", 55],
        ["nl", 66],
        ["de", 74],
        ["at", 273],
        ["fi", 333],
        ["us", 835],
        ["gb", 921],
      ]);
      this.cn_year_dependent.push([
        ["pt", 62],
        ["nl", 105],
        ["ua", 110],
        ["de", 114],
        ["jp", 128],
        ["ca", 129],
        ["fi", 206],
        ["at", 560],
        ["gb", 955],
        ["us", 1827],
      ]);
    });
  },
};
</script>
