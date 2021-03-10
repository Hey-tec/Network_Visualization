<template>
	<!--为echarts准备一个具备大小的容器dom-->
	<div id="main" style="width: 600px;height: 400px;"></div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		name: '',
		data() {
			return {
				charts: '',
			/*	opinion: ["1", "3", "3", "4", "5"],*/
				opinionData: ["3", "2", "4", "4", "5"]
			}
		},
		methods: {
			
		},
		//调用
		mounted() {
			this.$nextTick(function() {
				this.drawLine('main')
			})
		}
	}
</script>