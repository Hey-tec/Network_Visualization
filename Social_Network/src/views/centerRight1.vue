<template>
  <div id="centreRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">热点新闻排行榜Top10</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="width:6rem;height:4.28rem" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["新闻", "平台", "评论数量"],
        data: [
          ["滴滴顺风车终于归来", "新浪", "25000"],
          ["仿妆博主宇芽斥男友家暴 男方若无其事悠闲晒美食", "头条", "24804"],
          ["举报豫章书院志愿者称遭死亡威胁 原书院山长回应", "头条", "24641"],
          ["足协致歉：让广大球迷倍感失望 接受里皮辞职请求", "新浪", "22641"],
          ["《少年的你》原著作者否认抄袭 发长文谈创作过程", "新浪", "22581"],
          ["你的双11快递可能被烧了 河南装13吨快递货车起火", "新浪", "21976"],
          ["网易向被裁员工致歉：其绩效确不合格 处理过程不妥", "新浪", "21541"],
          ["王健林财富缩水682.4亿元 福布斯富豪榜第4跌至第14", "新浪", "20964"],
          ["手术前医生突然离开 患者家属知情后万分感动", "头条", "20567"],
          ["《五维记忆》诉《哪吒》侵权 北京知产法院受理", "头条", "19564"]
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50,220,60,90],
        align: ["center"]
      }
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centreRight1 {
  padding: 0.2rem;
  height: 5.125rem;
  min-width: 6rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>