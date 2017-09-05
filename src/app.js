
import './style/less/base.less';
import Vue from 'vue';
import App from './app.vue';
import Loading from './components/loading';
import store from './store';
import router from './router';
import jQuery from 'jquery';

window.$image_root = 'http://m.jiguo.com/test/images/';
window.$image_load_default = Vue.$image_root+'6cd46230.lazyload_default.png';
window.$WIN_HEIGHT = jQuery(window).height();
window.$WIN_WIDTH = jQuery(window).width();

Vue.use(Loading);

new Vue({
  el: '#app',
  router,
  store,
  render: _ => _(App)
});

