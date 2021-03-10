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
              <span class="title-text">全球AS网络数据可视化</span>
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
              <span class="text">各国数据内容分析</span>
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

        <div class="body-box">
          <!-- 左上方线图 -->
          <div class="border-box-pie">
              <dv-border-box-12 style="top:-3.4rem;height:4rem; width:6rem;">
                  <div class="double_line" style="position: relative; left: -0.6rem;top: -2.4rem; height:4rem; width:5.3rem;">
                    <centerLeft1 />
                  </div>
              </dv-border-box-12>
          </div>
          <!-- 左下方轮转表 -->
          <div class="border-box-rank" >
              <dv-border-box-13 style="position:absolute;top:4rem;height:7.4rem; width:6rem;">
                <div style="position: absolute; left:-0.8rem;">
                  <centerLeft2 />
                </div>
              </dv-border-box-13>
          </div>
          <div class="border-box-content">
            <!-- 中心上方地图 -->
            <!-- <dv-border-box-10 style="left: 4rem; top: 0.5rem; right: 0.5rem; height: 8rem"> -->
              <div class="myMap" style="position: relative; left: 7rem;top: -2rem;">
                <centerMap />
              </div>
            <!-- </dv-border-box-10> -->
          </div>
          <!-- 右边第一个组件 -->
          <div class="border-box-graph1">
            <!-- <dv-border-box-12 style="position:absolute;top:0.1rem;left:-0.4rem;height:3.7rem; width:5.85rem;"> -->
              <centerRight1 />
            <!-- </dv-border-box-12> -->
          </div>
          <!-- 右边第二个组件 -->
          <div class="border-box-graph2" style="top:5rem;">
            <dv-border-box-12 style="position:absolute;top:0.3rem;left:-0.4rem;height:3.3rem; width:5.85rem;">
              <centerRight2 />
            </dv-border-box-12>
          </div>
          <!-- 右边第三个组件 -->
          <div class="border-box-graph3">
            <dv-border-box-13 style="position:absolute;top:2.7rem;left:-0.4rem;height:4.5rem; width:5.85rem;">
              <div style="position:absolute; top:-2.3rem;left:-0.4rem;">
                <centerRight3 />
              </div>
            </dv-border-box-13>
          </div>
          <!-- 中心下方六小块 -->
          <div style="position: absolute; left: 6.45rem; top: 9.9rem;">
            <centerBlock />
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { formatTime } from "../utils/index.js";
import centerLeft1 from "./centerLeft1";
import centerMap from "./centerMap";
import centerLeft2 from "./centerLeft2";
import centerRight1 from "./centerRight1";
import centerRight2 from "./centerRight2";
import centerRight3 from "./centerRight3"
import centerBlock from "./centerBlock";

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
    centerLeft1,
    centerMap,
    centerLeft2,
    centerRight1,
    centerRight2,
    centerRight3,
    centerBlock
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