// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import App from './App'
import router from './router'
// import mui from './assets/mui'
import remConfig from './assets/test'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

remConfig(750,750)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
