<template>
    <div>

        <van-nav-bar title="XX商城">
            <van-icon name="search" slot="left" @click="onClickLeft"/>
            <van-icon name="contact" slot="right" @click="onClickRight"/>
        </van-nav-bar>

        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in swipeimages" :key="index">
                <img :src="image" style="max-height:200px;" >
            </van-swipe-item>
        </van-swipe>
        <!-- closeable 模式，在右侧显示关闭按钮 -->
        <van-notice-bar left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png">
            足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
        </van-notice-bar>

        <!--whb:加载自定义全局组件Tab-->
        <GlobalTab />

    </div>
</template>

<script>
    import {
        NavBar, Row, Col, Icon, Field,Toast,

        NoticeBar,

        Swipe, SwipeItem,

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

            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,

        },
        data() {
            return {
                swipeimages: [
                    //'/img/swipe/1.jpg',
                    'http://m.360buyimg.com/mobilecms/jfs/t26806/45/359071206/123827/98401adb/5b8fc61bN8b4cce20.jpg!cr_1125x549_0_72',
                    'http://m.360buyimg.com/mobilecms/jfs/t26806/45/359071206/123827/98401adb/5b8fc61bN8b4cce20.jpg!cr_1125x549_0_72'
                ]
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push('/search');
            },
            onClickRight() {
                this.$router.push('/login');
            }
        },
        mounted(){
            console.log("页面加载完成")
        }

    };
</script>

<style type="text/css">

</style>