<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from "./chart.vue";
export default {
  data() {
    return {
      cdata: [
        {
          // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
          name: "china",
          value: 50,
          elseData: {
            // 这里放置地图 tooltip 里想显示的数据
          },
        },
        {
          name: "湖南",
          value: 0,
        },
        {
          name: "湖北",
          value: 0,
        },
        {
          name: "广东",
          value: 0,
        },
        {
          name: "广西",
          value: 0,
        },
        {
          name: "河南",
          value: 0,
        },
        {
          name: "河北",
          value: 5,
        },
        {
          name: "山东",
          value: 8,
        },
        {
          name: "山西",
          value: 0,
        },
        {
          name: "江苏",
          value: 5,
        },
        {
          name: "浙江",
          value: 9,
        },
        {
          name: "江西",
          value: 0,
        },
        {
          name: "黑龙江",
          value: 2,
        },
        {
          name: "新疆",
          value: 0,
        },
        {
          name: "云南",
          value: 0,
        },
        {
          name: "贵州",
          value: 0,
        },
        {
          name: "福建",
          value: 0,
        },
        {
          name: "吉林",
          value: 0,
        },
        {
          name: "安徽",
          value: 0,
        },
        {
          name: "四川",
          value: 0,
        },
        {
          name: "西藏",
          value: 0,
        },
        {
          name: "宁夏",
          value: 0,
        },
        {
          name: "辽宁",
          value: 0,
        },
        {
          name: "青海",
          value: 0,
        },
        {
          name: "甘肃",
          value: 0,
        },
        {
          name: "陕西",
          value: 0,
        },
        {
          name: "内蒙古",
          value: 3,
        },
        {
          name: "北京",
          value: 0,
        },
        {
          name: "上海",
          value: 0,
        },
        {
          name: "台湾",
          value: 0,
        },
        {
          name: "天津",
          value: 0,
        },
      ],
    };
  },
  components: {
    Chart,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>