/*whb:本文件是@Vue/cli框架文件，请只修改自定义的routes部分*/
import Vue from 'vue';
import Router from 'vue-router';

/*whb:通过Vue.use显式使用路由插件*/
Vue.use(Router);

/*
whb:自定义路由部分，path是路由规则，name是模块名称compenent是组件引用，meta是用户自定义元数据
注：如果节点中不定义path，则path默认值即为 /name
*/
const routes = [
    {
        path: '*',
        redirect: '/index'
    },
    {
        name: 'index',
        component: () => import('./view/index'),
        meta: {
            title: 'XX商城'
        }
    },
    {
        name: 'tablist',
        component: () => import('./view/tablist'),
        meta: {
            title: '分类列表'
        }
    },
    {
        name: 'cart',
        component: () => import('./view/cart'),
        meta: {
            title: '购物车'
        }
    },
    {
        name: 'user',
        component: () => import('./view/user'),
        meta: {
            title: '我的'
        }
    },
    {
        name: 'login',
        component: () => import('./view/login'),
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'search',
        component: () => import('./view/search'),
        meta: {
            title: '搜索'
        }
    },

];

// add route path
/*whb:如果path为空，则取name模块名称为路由规则*/
/*whb:特别注意：如果callbackFunc回调函数内部有对Array元素进行运算，则Array元素本身的值也已经发生了改变。*/
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({routes});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};
