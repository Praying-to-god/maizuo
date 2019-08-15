import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/styles/base.scss';

//将 vue 的开发提示关闭
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
