// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.config.productionTip = false

//引入全局css
import '../static/css/global.css'

//引入axios
import Axios from 'axios'
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = '';

//加载自定义插件
import Installer from '@/plugins/installer'
Vue.use(Installer);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
