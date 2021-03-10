<template>
  <div>
    <Echart
      id="centreLeft2Chart"
      ref="centreLeft2ChartRef"
      :options="options"
      height="5.5rem"
      width="4.55rem"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart';
export default {
  data() {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        // 设置点的位置(经纬度)
            var geoCoordMap = {
                海门: [121.15, 31.89,20],
                鄂尔多斯: [109.781327, 39.608266],
                招远: [120.38, 37.35,20],
                舟山: [122.207216, 29.985295],
                齐齐哈尔: [123.97, 47.33],
                盐城: [120.13, 33.38],
                赤峰: [118.87, 42.28],
                青岛: [120.33, 36.07],
                乳山: [121.52, 36.89],
                金昌: [102.188043, 38.520089],
                泉州: [118.58, 24.93],
                莱西: [120.53, 36.86],
                日照: [119.46, 35.42],
                胶南: [119.97, 35.88],
                南通: [121.05, 32.08],
                拉萨: [91.11, 29.97],
                云浮: [112.02, 22.93],
                梅州: [116.1, 24.55],
                文登: [122.05, 37.2],
                上海: [121.48, 31.22],
                攀枝花: [101.718637, 26.582347],
                威海: [122.1, 37.5],
                承德: [117.93, 40.97],
                厦门: [118.1, 24.46],
                汕尾: [115.375279, 22.786211],
                潮州: [116.63, 23.68],
                丹东: [124.37, 40.13],
                太仓: [121.1, 31.45],
                曲靖: [103.79, 25.51],
                烟台: [121.39, 37.52]
            };
        let seriesData = [
                { name: '海门', value: 9 },
                { name: '鄂尔多斯', value: 12 },
                { name: '招远', value: 12 },
                { name: '舟山', value: 12 },
                { name: '齐齐哈尔', value: 14 },
                { name: '盐城', value: 15 },
                { name: '赤峰', value: 16 }
            ];
        let convertData = function (data) {
          let scatterData = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              scatterData.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
              });
            }
          }
          return scatterData;
        };
        this.options = {
          showLegendSymbol: true,
          tooltip: {
            trigger: 'item',
            textStyle: {
              fontSize: 14,
              lineHeight: 22,
            },
            position: point => {
              // 固定在顶部
              return [point[0] , point[1] ];
            },
          },
          visualMap: {
            min: 0,
            max: 10,
            show: false,
            seriesIndex: 0,
            // 颜色
            inRange: {
              color: ['rgba(0,0,0, .5)', 'rgba(69,117,245, .9)'],
            },
          },
          // 底部背景
          geo: {
            show: true,
            aspectScale: 0.7, //长宽比
            zoom: 1.2,
            top: '8%',
            left: '9%',
            map: 'china',
            roam: false,
            itemStyle: {
              normal: {
                areaColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(7,114,204, .8)',
                shadowOffsetX: 1,
                shadowOffsetY: 1,
              },
              emphasis: {
                areaColor: '#00aeef',
              },
            },
          },
          series: [
            {
              name: '爬虫数量',
              type: 'map',
              aspectScale: 0.7, //长宽比
              zoom: 1.2,
              mapType: 'china', // 自定义扩展图表类型
              top: '8%',
              left: '9%',
              itemStyle: {
                normal: {
                  color: 'red',
                  areaColor: 'rgba(19,54,162, .5)',
                  borderColor: 'rgba(0,242,252,.3)',
                  borderWidth: 1,
                  shadowBlur: 3,
                  shadowColor: '#00f2fc',
                },
                emphasis: {
                  areaColor: '#4f7fff',
                  borderColor: 'rgba(0,242,252,.6)',
                  borderWidth: 2,
                  shadowBlur: 10,
                  shadowColor: '#00f2fc',
                },
              },
              label: {
                formatter: params => `${params.name}`,
                // show: true,
                position: 'bottom',
                textStyle: {
                  fontSize: 10,
                  color: '#efefef',
                },
                emphasis: {
                  textStyle: {
                    color: '#fff',
                  },
                },
              },
              data: newData,
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbolSize: 7,
              effectType: 'ripple',
              legendHoverLink: false,
              showEffectOn: 'render',
              rippleEffect: {
                period: 4,
                scale: 2.5,
                brushType: 'stroke',
              },
              zlevel: 1,
              itemStyle: {
                normal: {
                  color: '#99FBFE',
                  shadowBlur: 5,
                  shadowColor: '#fff',
                },
              },
              data: convertData(seriesData),
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
  methods: {
    // 开启定时器
    startInterval() {
      const _self = this;
      // 应通过接口获取配置时间，暂时写死5s
      const time = 2000;
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => {
        _self.reSelectMapRandomArea();
      }, time);
    },
    // 重新随机选中地图区域
    reSelectMapRandomArea() {
      const length = 9;
      this.$nextTick(() => {
        const map = this.$refs.centreLeft2ChartRef.chart;
        let index = Math.floor(Math.random() * length);
        while (index === this.preSelectMapIndex || index >= length) {
          index = Math.floor(Math.random() * length);
        }
        map.dispatchAction({
          type: 'mapUnSelect',
          seriesIndex: 0,
          dataIndex: this.preSelectMapIndex,
        });
        map.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index,
        });
        map.dispatchAction({
          type: 'mapSelect',
          seriesIndex: 0,
          dataIndex: index,
        });
        this.preSelectMapIndex = index;
      });
    },
    handleMapRandomSelect() {
      this.$nextTick(() => {
        const map = this.$refs.centreLeft2ChartRef.chart;
        const _self = this;
        setTimeout(() => {
          _self.reSelectMapRandomArea();
        }, 0);
        // 移入区域，清除定时器、取消之前选中并选中当前
        map.on('mouseover', function (params) {
          clearInterval(_self.intervalId);
          map.dispatchAction({
            type: 'mapUnSelect',
            seriesIndex: 0,
            dataIndex: _self.preSelectMapIndex,
          });
          map.dispatchAction({
            type: 'mapSelect',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
          });
          _self.preSelectMapIndex = params.dataIndex;
        });
        // 移出区域重新随机选中地图区域，并开启定时器
        map.on('globalout', function () {
          _self.reSelectMapRandomArea();
          _self.startInterval();
        });
        this.startInterval();
      });
    },
  },
};
</script>
