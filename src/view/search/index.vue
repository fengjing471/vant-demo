<template>
    <div>
        <van-nav-bar title="搜索" left-arrow left-text="返回" @click-left="goBack">
            <!--<van-icon name="search" slot="right" />-->
        </van-nav-bar>

        <van-search
                v-model="searchText"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>


        <!--whb:加载自定义全局组件Tab-->
        <GlobalTab />

    </div>
</template>

<script>
    import {
        NavBar, Row, Col, Icon, Field, Toast,
        Search,

    } from 'vant';

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Field.name]: Field,
            [Toast.name]: Toast,

            [Search.name]: Search,

        },
        data() {
            return {
                searchText:''
            }
        },
        methods: {
            onSearch() {
                Toast('搜索关键字为：'+this.searchText);
            },
            goBack(){
                this.$router.go(-1);
            }
        },
        mounted(){
            console.log("页面加载完成")
        }

    };
</script>

<style type="text/css">

</style>