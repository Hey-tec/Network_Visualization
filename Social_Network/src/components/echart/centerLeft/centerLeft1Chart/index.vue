<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
      cdata: {
        xData: ["国内新闻", "音乐频道", "国际新闻", "新浪军事", "新浪政务",  "新浪科技", "新浪体育", "社会万象"],
        seriesData: [
          { value: 294581, name: "国内新闻" },
          { value: 214156, name: "音乐频道" },
          { value: 70196, name: "国际新闻" },
          { value: 55355, name: "新浪军事" },
          { value: 85607, name: "新浪科技" },
          { value: 126313, name: "新浪体育" },
          { value: 79790, name: "新浪政务" },
          { value: 65000, name: "社会万象" }
        ]
      }
    }
  },
  components: {
    Chart,
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>