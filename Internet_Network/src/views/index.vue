<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width: 33.3%; height: 0.0625rem" />
          <div class="d-flex jc-center">
            <dv-decoration-8
              :color="['#568aea', '#000000']"
              style="width: 2.5rem; height: 0.625rem"
            />
            <div class="title">
              <span class="title-text">开源软件数据可视化</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width: 3.125rem; height: 0.1rem"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width: 2.5rem; height: 0.625rem"
            />
          </div>
          <dv-decoration-10
            style="width: 33.3%; height: 0.0625rem; transform: rotateY(180deg)"
          />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="
                width: 6.25rem;
                text-align: left;
                background-color: #0f1325;
              "
            >
              <span class="react-before"></span>
              <span class="text">Github数据内容分析</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325">
              <span class="text colorBlue">地理信息</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left bg-color-blue mr-3">
              <span class="text fw-b">数据统计内容展示</span>
            </div>
            <div
              class="react-left mr-4"
              style="
                width: 6.25rem;
                background-color: #0f1325;
                text-align: center;
              "
            >
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>

        <!-- <div class="body-box"> -->

        <div class="border-box-pie">
          <centerLeft1Country />
        </div>
        
        <div class="border-box-rank">
          <centerRight1 />
        </div>
        <div class="border-box-content">
          <dv-border-box-1
            :color="['red', 'green']"
            backgroundColor="blue"
            style="left: 4rem; top: 0.5rem; right: 0.5rem"
          >
            <div
              class="myMap"
              style="position: absolute; left: 1.5rem; top: 0.5rem"
            >
              <centerLeft2 />
            </div>
          </dv-border-box-1>
        </div>
        <div class="border-box-graph1">
          <centerRight2 />
        </div>
        <div class="border-box-graph2" style="top: 33%">
          <centerRight3 />
        </div>
        <div class="border-box-graph3">
          <centerRight4 />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { formatTime } from "../utils/index.js";
// import centerLeft1Chart from "./centerLeft1";
import centerLeft1Country from "./centerLeft1country";
import centerLeft2 from "./centerLeft2";
import centerRight1 from "./centerRight1";
import centerRight2 from "./centerRight2";
import centerRight3 from "./centerRight3";
import centerRight4 from "./centerRight4"
import center from "./center";

export default {
  data() {
    return {
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      // currentcountry:'china',
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },

  components: {
    centerLeft1Country,
    // centerLeft1Chart,
    centerLeft2,
    centerRight1,
    centerRight2,
    centerRight3,
    centerRight4,
    center
    // bottomLeft,
    // bottomRight
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  methods: {
    timeFn() {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
</style>