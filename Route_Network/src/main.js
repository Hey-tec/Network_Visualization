import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';

// 全局注册图标
Vue.component('icon', Icon);

// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';

//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.prototype.resetSetItem = function (key, newVal) {
  var newStorageEvent
  if (key === 'countryName') {
      // 创建一个StorageEvent事件
      newStorageEvent = document.createEvent('StorageEvent');
      const storage = {
          setItem: function (k, val) {
              sessionStorage.setItem(k, val);

              // 初始化创建的事件
              newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

              // 派发对象
              window.dispatchEvent(newStorageEvent)
          }
      }
      return storage.setItem(key, newVal);
  } 
  if (key === 'currentIndex') {
    // 创建一个StorageEvent事件
    newStorageEvent = document.createEvent('StorageEvent');
    const storage = {
        setItem: function (k, val) {
            sessionStorage.setItem(k, val);

            // 初始化创建的事件
            newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

            // 派发对象
            window.dispatchEvent(newStorageEvent)
        }
    }
    return storage.setItem(key, newVal);
}
};
