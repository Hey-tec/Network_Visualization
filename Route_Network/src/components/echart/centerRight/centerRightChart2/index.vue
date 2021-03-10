<template>
  <div id="app">
    <viewer :images="images">
      <dv-border-box-8 style="position:absolute;top:0.6rem;left:0.2rem;width:120px; height:120px">
        <img :src="networkImg1"  style="position:absolute;left:-0.39rem;top:0.12rem;width:100px; height:100px">
        <div style="position:absolute;top:1.7rem;left:-0.1rem;">PageRank</div>
      </dv-border-box-8>
      <dv-border-box-8 style="position:absolute;top:0.6rem;left:2.05rem;width:120px; height:120px">
        <img :src="networkImg2"  style="position:absolute;left:-0.39rem;top:0.12rem;width:100px; height:100px">
        <div style="position:absolute;top:1.7rem;left:-0.1rem;">K-shell</div>
      </dv-border-box-8>
      <dv-border-box-8 style="position:absolute;top:0.6rem;left:3.9rem;width:120px; height:120px">
        <img :src="networkImg3"  style="position:absolute;left:-0.39rem;top:0.12rem;width:100px; height:100px">
        <div style="position:absolute;top:1.7rem;left:-0.1rem;">Longitude</div>
      </dv-border-box-8>
    </viewer>
  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)
  Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});
  export default {
    data() {
      return{
        networkImg1: require('@/assets/images/network.png'),
        networkImg2: require('@/assets/images/k-shell.png'),
        networkImg3: require('@/assets/images/地理区域.png'),
      }
    }
  }
</script>