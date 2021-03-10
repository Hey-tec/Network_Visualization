<template>
  <div id="center">
    <!-- 新闻数据显示 -->
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
        <div>
          <dv-digital-flop
            :config="item.number"
            style="width:90%;height:.625rem;"
          />
        </div>
      </div>
    </div>

    <div class="down">
      <div class="ranking bg-color-black">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1">不同平台新闻数据占比</span>
        <dv-scroll-ranking-board
          :config="ranking"
          style="height:2.75rem"
        />
      </div>
      <div class="percent">
        <div class="item bg-color-black">
          <span>网易新增</span>
          <CenterChart
            :id="rate[0].id"
            :tips="rate[0].tips"
            :colorObj="rate[0].colorData"
          />
        </div>
        <div class="item bg-color-black">
          <span>新浪新增</span>
          <CenterChart
            :id="rate[1].id"
            :tips="rate[1].tips"
            :colorObj="rate[1].colorData"
          />
        </div>
        <div class="item bg-color-black">
          <span>头条新增</span>
          <CenterChart
            :id="rate[2].id"
            :tips="rate[2].tips"
            :colorObj="rate[2].colorData"
          />
        </div>
        <div class="water">
          <span style="padding-left:32%">昨日新闻新增</span>
          <dv-water-level-pond
            :config="water"
            style="height: 1.4rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterChart from "@/components/echart/center/centerChartRate";
export default {
  data() {
    return {
      titleItem: null,
      commentNum :91464745,
      newsNum:2930419,
      ranking: {
        data: [
          {
            name: "网易新闻",
            value: 85531,
          },
          {
            name: "新浪新闻",
            value: 1160570,
          },
          {
            name: "头条新闻",
            value: 1684318,
          },
          {
            name: "网易评论",
            value: 7116004,
          },
          {
            name: "新浪评论",
            value: 26503650,
          },
          {
            name: "头条评论",
            value: 57845091,
          },
          {
            name: "网易用户",
            value: 1779001,
          },
          {
            name: "新浪用户",
            value: 5300730,
          },
          {
            name: "头条用户",
            value: 11569018,
          },
        ],
        carousel: "single",
      },
      rate: [
        {
          id: "centerRate1",
          tips: 0.02,
          colorData: {
            textStyle: "#3fc0fb",
            series: {
              color: ["#00bcd44a", "transparent"],
              dataColor: {
                normal: "#03a9f4",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          id: "centerRate2",
          tips: 0.03,
          colorData: {
            textStyle: "#67e0e3",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#ff9800",
                shadowColor: "#fcebad",
              },
            },
          },
        },
        {
          id: "centerRate3",
          tips: 0.05,
          colorData: {
            textStyle: "#67e0e3",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#ff9800",
                shadowColor: "#fcebad",
              },
            },
          },
        },
      ],
      water: {
        data: [0.098],
        shape: "roundRect",
        formatter: "{value}%",
        waveNum: 3,
      },
    };
  },
  methods: {
    setData() {
      setInterval(() => {
        var addcommentnum = Math.random()*100
        var addnewsnum = Math.random()*5
        let a = this.commentNum + addcommentnum
        let b = this.newsNum + addnewsnum
        this.titleItem = [
          {
            title: "新闻总数",
            number: {
              number: [b],
              content: "{nt}",
              style: {
                fontSize: 25,
                fill: "#3de7c9",
              },
            },
          },
          {
            title: "评论总数",
            number: {
              number: [a],
              content: "{nt}",
              style: {
                fontSize: 25,
                fill: "#3de7c9",
              },
            },
          },
          {
            title: "用户总数",
            number: {
              number: [34659749],
              content: "{nt}",
              style: {
                fontSize: 25,
                fill: "#3de7c9",
              },
            },
          },
          {
            title: "昨日新闻新增",
            number: {
              number: [28641],
              content: "{nt}",
              style: {
                fontSize: 25,
                fill: "#3de7c9",
              },
            },
          },
          {
            title: "昨日评论新增",
            number: {
              number: [124354],
              content: "{nt}",
              style: {
                fontSize: 25,
                fill: "#3de7c9",
              },
            },
          },
          {
            title: "昨日用户新增",
            number: {
              number: [5],
              content: "{nt}",
              style: {
                fontSize: 25,
                fill: "#3de7c9",
              },
            },
          },
        ];
        this.commentNum = a
        this.newsNum = b
      }, 3000);
    },
  },
  components: {
    CenterChart,
  },
  mounted() {
    this.setData();
  },
};
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.2rem;
      margin-top: 0.1rem;
      width: 33%;
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
      width: 45%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 33%;
        height: 1.4rem;
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