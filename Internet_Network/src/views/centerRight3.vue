<template>
  <div id="centreRight2">
    <div class="bg-color-black" style="height:3.65rem">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2">当前国家历年项目变化数</span>
      </div>
      <div class="d-flex jc-center body-box" style=" margin-top: 0;">
        <dv-capsule-chart :config="config" style="width: 100%;height:3.8rem;" id="testmy"/>
        <!-- ---------------------------------------- -->
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import yearCountryNum from '../../public/json/yearCountryPro.json'

export default {
  data() {
    return {
      countryName: 'China',
      ydata:[],
      config: null
    };
  },
  components: {  },
  mounted() {
    window.addEventListener("setItem", () => {
      this.countryName = sessionStorage.getItem("countryName");
      var ydata = []
      
      if (this.countryName != 'undefined') {
        for (var i = 0; i < yearCountryNum.length; i++) {
          if (this.countryName === yearCountryNum[i].countryName) {
            for (var t = 0; t < yearCountryNum[i].count.length; t++) {
              var temp = yearCountryNum[i].count[t] * 8 + i;
              ydata.push(temp / 10 + "")
            }
          }
        }
        this.drawLine("testmy", ydata)
      }
    });
  },
  methods: {
    // dataFormat(countryName) {
    //   // countryName = countryName + 'a'
    // },
    drawLine(id, ydata) {
        this.charts = echarts.init(document.getElementById(id))
        this.config = {
					tooltip: {
						trigger: 'axis'
					},
					// legend: {
					// 	data: ['近七日收益']
					// },
					grid: {
						// left: '3%',
						// right: '4%',
						// bottom: '3%',
						containLabel: true
					},

					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
					data: ["2012","2013","2014","2015","2016", "2017"]
					
					},
					yAxis: {
						type: 'value'
					},

					series: [{
						type: 'line',
						stack: '总量',
						data: ydata
					}]
				}
				this.charts.setOption(this.config)
			}
  }
};
</script>

<style lang="scss">
#centreRight2 {
  padding: 0.0625rem;
  height: 10rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    padding: 0.0625rem;
    height: 5rem;
    width: 5rem;
    bottom: 4rem;
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