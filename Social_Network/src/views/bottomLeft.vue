<template>
  <div id="bottomLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">舆情网络分析</span>
        </div>
      </div>
      <div class="test">
        <el-carousel
          :interval="2000"
          arrow="always"
          class="content"
        >
          <el-carousel-item
            v-for="item in 6"
            :key="item"
          >
            <!-- <span class="title">{{ title[item-1] }}</span> -->
            <el-image
              class="imageStyle"
              :src="urlList[item-1]"
            >
            </el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlList: [
        "./analysis/confict_one.jpg",
        "./analysis/confict_two.jpg",
        "./analysis/confict_three.jpg",
        "./analysis/confict_four.jpg",
        "./analysis/confict_five.png",
        "./analysis/confict_six.png",
      ],
      title: [
        "反对华为新闻的新闻网络",
        "支持华为新闻的新闻网络",
        "评论回复时间的幂律分布",
        "评论点赞数的幂律分布",
        "评论深度的互补累计分布",
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#bottomLeft {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-top: 0.2rem;
  height: 6.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 6.0625rem;
    border-radius: 0.125rem;
  }
}
.content {
  margin-right: 0.5rem;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
}
.imageStyle {
  width: 78%;
  height: 100%;
  position: relative;
  margin-left: 10%;
}
.title {
  padding-left: 2.6rem;
  text-align: center;
  color: #475669;
  font-size: 25px;
  line-height: 50px;
}
.test {
  // margin-left:5%;
  // margin-right:5%;
  background-color:#0f1325;
  height: 100%;
  .el-carousel__item h3 {
    text-align: center;
    color: #475669;
    font-size: 25px;
    line-height: 30px;
    margin: center;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #0f1325;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #0f1325;
  }
}
</style>