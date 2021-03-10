<template>
  <!-- 中下方六小块总体所占区域的长宽 -->
  <div id="centerBlock" style="width:11.5rem; height:2rem;">   
    <div class="up">
      <!-- 中下方每一小块的长宽 -->
      <div class="bg-color-black item" style="width:3.5rem; height:1.5rem;" v-for="item in titleItem" :key="item.title">
        <img  :src="item.image" style="position:relative;left:0.1rem;top:-0.1rem;width:100px; height:100px"/>
        <p class="ml-4 colorBlue fw-b" style="position:relative;left:1.5rem;top:-1.2rem;font-size: 17px;font-weight:bold;">{{item.title}}</p>
        <div>
          <!-- 中下方每一小块中字体的格式 -->
          {{item.number}}
          <dv-digital-flop :config="item.number" style="position:relative;left:0.7rem;top:-1.5rem;font-size: 20px;font-weight:bold;"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CenterChart from "@/components/echart/center/centerChartRate";


export default {
  data () {
    return {
      titleItem: [
        {
          title: "本国总路径数",
          image:require('@/assets/images/center-details-data1.png'),
          number:{number: [3301]}
        },
        {
          title: "国内路径总数",
          image:require('@/assets/images/center-details-data2.png'),
          number:{number: [838]}
        },
        {
          title: "国外路径总数",
          image:require('@/assets/images/center-details-data3.png'),
          number:{number: [2463]}
        },
        {
          title: "p2p—路径总数",
          image:require('@/assets/images/center-details-data4.png'),
          number:{number: [1705]}
        },
        {
          title: "p2c—路径总数",
          image:require('@/assets/images/center-details-data5.png'),
          number:{number: [384]}
        },
        {
          title: "c2p—路径总数",
          image:require('@/assets/images/center-details-data6.png'),
          number:{number: [374]}
        }
      ],
    };
  },
  components: {
    // CenterChart
  },
  mounted() {
    window.addEventListener("setItem", () => {
      this.currentName = sessionStorage.getItem("currentName");
      console.log(this.currentName)
    });

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
#centerBlock {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.2rem;
      margin-top: 0.1rem;
      width: 32%;
      height: 0.875rem;
    }
  }
  .down {
    padding: 0.07rem 0.05rem;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 3.1875rem;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 0.0625rem;
    }
    .ranking {
      padding: 0.125rem;
      width: 59%;
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 1.5rem;
        span {
          margin-top: 0.0875rem;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
      }
    }
  }
}
</style>