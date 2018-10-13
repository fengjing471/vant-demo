<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home"><router-link to="/index">首页</router-link></van-tabbar-item>
        <van-tabbar-item icon="idcard" dot><router-link to="/tablist">分类</router-link></van-tabbar-item>
        <van-tabbar-item icon="cart"><router-link to="/cart">购物车</router-link></van-tabbar-item>
        <van-tabbar-item icon="contact" info="5"><router-link to="/user">我的</router-link></van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {
        Tabbar, TabbarItem
    } from 'vant';

    export default {
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        data() {
            return {
                active:0
            }
        },
        mounted(){
            console.log(this.$router);
        }
    };
</script>
<style type="text/css">
</style>