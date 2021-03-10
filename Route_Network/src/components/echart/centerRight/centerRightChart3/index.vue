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
        x_Data: [
                180101,
                180701,
                190101,
                190701,
                200101,
                200701,         
                ],
        line_Data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8],
        
        bar_Data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8]

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