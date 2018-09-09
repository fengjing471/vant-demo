import MyCom from './tab.vue';
const GlobalTab={
    install:function (Vue){
        Vue.component('GlobalTab',MyCom)
    }
}
export default GlobalTab