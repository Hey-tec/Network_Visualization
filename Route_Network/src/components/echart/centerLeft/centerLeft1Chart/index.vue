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
        xData: [180101, 180701, 190101, 190701, 200101, 200701],
        AS_Num_Data: [1120, 1166, 1224, 1284, 1348, 1404],
        Nation_Num_Data: [122, 126, 130, 128, 131, 132],
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