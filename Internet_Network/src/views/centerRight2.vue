<template>
  <div id="centreRight2">
    <div class="bg-color-black" style="height:3.5rem;">
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2">OSS项目排名数据</span>
      </div>
      <div class="d-flex jc-center body-box" style="margin-top: 0">
        <dv-capsule-chart
          :config="config"
          style="width: 100%; height: 3rem; left: 10%"
        />
        <!-- ---------------------------------------- -->
        <centreRight2Chart1 />
      </div>
    </div>
  </div>
</template>

<script>
import centreRight2Chart1 from "@/components/echart/centerRight/centerRightChart";
import country2012 from "../../public/json/2012/countryRelatedCountry_2012.json";
import country2013 from "../../public/json/2013/countryRelatedCountry_2013.json";
import country2014 from "../../public/json/2014/countryRelatedCountry_2014.json";
import country2015 from "../../public/json/2015/countryRelatedCountry_2015.json";
import country2016 from "../../public/json/2016/countryRelatedCountry_2016.json";
import country2017 from "../../public/json/2017/countryRelatedCountry_2017.json";

export default {
  data() {
    return {
      countryName: "China",
      currentIndex: 2012,
      yearArray: [],
      config: null
    };
  },
  components: { centreRight2Chart1 },
  mounted() {
    window.addEventListener("setItem", () => {
      this.countryName = sessionStorage.getItem("countryName");
      this.currentIndex = sessionStorage.getItem("currentIndex");
      if (this.countryName != 'undefined') {
        this.dataFormat(this.countryName, this.currentIndex);
      }
    });
  },
  methods: {
    dataFormat(countryName, currentIndex) {
      this.yearArray.push(country2012);
      this.yearArray.push(country2013);
      this.yearArray.push(country2014);
      this.yearArray.push(country2015);
      this.yearArray.push(country2016);
      this.yearArray.push(country2017);
      var index = currentIndex - 2012;
      for (var i = 0; i < this.yearArray[index].length; i++) {
        if (this.yearArray[index][i].country === countryName) {
          var relatedCountry = this.yearArray[index][i].relatedCountry;
          var countedNames = relatedCountry.reduce(function (allNames, name) {
            if (name in allNames) {
              allNames[name]++;
            } else {
              allNames[name] = 1;
            }
            return allNames;
          }, {});
          var sortedDict = Object.keys(countedNames).sort(function (a, b) {
            return countedNames[b] - countedNames[a];
          });
          console.log("countedNames:", countedNames)
          console.log(sortedDict)
          var countrySet = new Set();
          for (var t = 0; t < 5; t++) {
            countrySet.add(sortedDict[t]);
          }

          var countryRelatedList = []
          for (var key in countedNames) {
            if (countrySet.has(key)) 
              countryRelatedList.push({name: key, value: (countedNames[key] + Math.random(7) * 5)})
          }
          this.config = {
            data: countryRelatedList
          };
        }
      }
    },
  },
};
</script>

<style lang="scss">
#centreRight2 {
  padding: 0.0625rem;
  height: 5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    padding: 0.0625rem;
    height: 4.5rem;
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