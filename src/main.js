import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './registerServiceWorker'
import 'flag-icon-css/css/flag-icon.css'
import 'leaflet/dist/leaflet.css'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
Vue.component('VueSlider', VueSlider)

import Toasted from 'vue-toasted';
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
