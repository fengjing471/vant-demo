<template>
    <div>
        <van-nav-bar
                title="分类列表"
        />

        <!--whb:sticky 滚动自动吸顶 swipeable 开启滑动切换效果，超过4条自动支持左右滑动-->
        <van-tabs v-model="tabactive" type="line" sticky swipeable>
            <van-tab title="标签 1">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <van-list
                            v-model="loading"
                            :finished="finished"
                            @load="onLoad"
                    >
                        <van-cell v-for="item in list" :key="item" :title="item + ''" />
                    </van-list>
                </van-pull-refresh>
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>


        <!--whb:加载自定义全局组件Tab-->
        <GlobalTab />

    </div>
</template>

<script>
    import {
        NavBar, Row, Col, Icon, Field,
        Toast, NoticeBar,

        Tab, Tabs,
        List, PullRefresh, Cell




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

            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [List.name]: List,
            [PullRefresh.name]: PullRefresh,
            [Cell.name]: Cell


        },
        data() {
            return {
                tabactive: 0,
                list: [],
                isLoading: false,
                loading: false,
                finished: false
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    //this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            },
            onLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        },
        mounted(){
            console.log("页面加载完成")
        }

    };
</script>

<style type="text/css">

</style>