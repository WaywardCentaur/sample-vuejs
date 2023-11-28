import Vue from 'vue'
import App from './App.vue'
import './assets/index.css';
import './assets/image.png';
import Vuetify from 'vuetify'




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).use(Vuetify).$mount('#app')
