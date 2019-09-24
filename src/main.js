// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// var VueResource = require('vue-resource')

// require styles
import 'swiper/dist/css/swiper.css'
// Vue.use(VueResource)
Vue.use(VueAwesomeSwiper/*, /* { default global options } */)
// function install(Vue){
//   Vue.component("vuetable", Vuetable);
//   Vue.component("vuetable-pagination", VueTablePagination);
//   Vue.component("vuetable-pagination-dropdown", VueTablePaginationDropDown);
//   Vue.component("vuetable-pagination-info", VueTablePaginationInfo);
// }
//
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
