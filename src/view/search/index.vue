<template>
    <div>
        <van-nav-bar
                title="搜索"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />

        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>

    </div>
</template>

<script>
    import {
        Search,

    } from 'vant';

    export default {
        components: {
            [Search.name]: Search,

        },
        methods: {
            onSearch() {
                //Toast('返回');
            },
            onClickRight() {
            }
        },
        mounted(){
            console.log("页面加载完成")
        }

    };
</script>

<style type="text/css">

</style>