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
      cdata: {
        category: [
          "2019/06",
          "2019/07",
          "2019/08",
          "2019/09",
          "2019/10",
          "2019/11",
          "2019/12",
          "2020/01",
          "2020/02",
        ],
        neteaseData: [
          10145,
          12061,
          10531,
          8631,
          15467,
          16612,
          18929,
          12457,
          14326,
        ],
        sinaData: [
          96457,
          125434,
          164879,
          208348,
          158808,
          167634,
          242287,
          185679,
          86413,
        ],
        toutiaoData: [
          180920,
          207280,
          240450,
          283480,
          214570,
          360970,
          525441,
          214671,
          103470,
        ],
        neteaseCommentsData: [1063589, 1256890, 1056478, 995478, 1357183, 1507183, 1277765, 1145780, 1250024],
        sinaCommentsData: [1964450, 3005240, 2540000, 4800400, 3567841, 3967667, 4129090, 3590450, 2564101],
        toutiaoCommentsData: [3901648, 3984576, 5164877, 6885671, 4875469, 15900161, 7777588, 5340450, 3897801],
      },
    };
  },
  components: {
    Chart,
  },
  mounted() {
    this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    setData() {
      for (let i = 0; i < this.cdata.barData.length - 1; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i];
        this.cdata.rateData.push(rate.toFixed(2));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>