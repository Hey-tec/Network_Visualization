<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="4rem"
      width="3.25rem"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
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
          color: [
            "#37a2da",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#fb7293",
            "#e7bcf3",
            "#8378ea"
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a}"
          },
          toolbox: {
            show: true
          },
          calculable: true,
          legend: {
            orient: "horizontal",
            icon: "circle",
            bottom: 0,
            x: "center",
            data: newData.xData,
            textStyle: {
              color: "#fff"
            }
          },
          series: [
            {
              name: "项目-国家",
              type: "pie",
              radius: [10, 60],
              roseType: "area",
              center: ["50%", "40%"],
              data: [
                {
                    "name": "United States",
                    "value": 50
                },
                {
                    "name": "Germany",
                    "value": 30
                },
                {
                    "name": "United Kingdom",
                    "value": 20
                },
                {
                    "name": "France",
                    "value": 18
                },
                {
                    "name": "Canada",
                    "value": 15
                },
                {
                    "name": "China",
                    "value": 12
                },
                {
                    "name": "India",
                    "value": 8
                }
            ],
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