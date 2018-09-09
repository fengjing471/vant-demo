/*whb:本文件是@Vue/cli框架文件，请勿改动*/
/*whb:本文件是@Vue/cli框架的全局入口文件*/

import './common/rem';
import Vue from 'vue';
import App from './App.vue';
import { router } from './router';

//whb:启用自定义全局样式
import './common/rfstyle.less';

//whb:启用自定义全局组件
import GlobalTab  from './components/global-tab';
Vue.use(GlobalTab);


/*whb:配置路由的mode,如果不配置会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头
如果配置为history，则使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState。*/
/*
import routers from './router'
const router = new VueRouter({
    mode: 'history',
    routes: routers
});
*/

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});




//whb:全局变量或函数定义区域_________begin
Vue.prototype.goBack = function (event) {
  console.log(event);
  //page.$router.go(-1);
};
//whb:全局变量或函数定义区域_________end
