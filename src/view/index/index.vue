<template>
    <div>
        <van-nav-bar
                title="XX商城"
                right-text="搜索"
                @click-right="onClickRight"
        />

        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in swipeimages" :key="index">
                <img :src="image" style="max-height:200px;" >
            </van-swipe-item>
        </van-swipe>
        <!-- closeable 模式，在右侧显示关闭按钮 -->
        <van-notice-bar left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png">
            足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
        </van-notice-bar>

        <van-tabbar v-model="tabactive">
            <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item icon="idcard" dot><router-link to="/tablist">分类</router-link></van-tabbar-item>
            <van-tabbar-item icon="cart"><router-link to="/cart">购物车</router-link></van-tabbar-item>
            <van-tabbar-item icon="contact" info="5"><router-link to="/user">我的</router-link></van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
    import {
        NavBar, Row, Col, Icon, Field,
        Toast, NoticeBar,

        Waterfall,

        Swipe, SwipeItem,

        Tabbar, TabbarItem


    } from 'vant';

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Field.name]: Field,

            [Toast.name]: Toast,
            [NoticeBar.name]: NoticeBar,

            [Waterfall.name]: Waterfall,

            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,

            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem

        },
        data() {
            return {
                tabactive:0,
                swipeimages: [
                    //'/img/swipe/1.jpg',
                    'http://m.360buyimg.com/mobilecms/jfs/t26806/45/359071206/123827/98401adb/5b8fc61bN8b4cce20.jpg!cr_1125x549_0_72',
                    'http://m.360buyimg.com/mobilecms/jfs/t26806/45/359071206/123827/98401adb/5b8fc61bN8b4cce20.jpg!cr_1125x549_0_72'
                ]
            }
        },
        methods: {
            onClickRight() {
                this.$router.push('/search');
            }
        },
        mounted(){
            console.log("页面加载完成")
        }

    };
</script>

<style type="text/css">

</style>