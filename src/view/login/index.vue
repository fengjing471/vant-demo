<template>
    <div class="">
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        <div class="van-cell-group van-hairline--top-bottom">
            <van-row type="flex" justify="center">
                <van-col span="20">

            <div class="van-cell van-hairline van-field"><i class="van-icon van-icon-contact van-cell__left-icon">
                </i>
                <div class="van-cell__title"><span>用户名</span><!----></div>
                <div class="van-cell__value">
                    <div class="van-field__body"><input type="text"  placeholder="请输入用户名" autocomplete="off" class="van-field__control">
                        </div>
                </div>
            </div>
            <div class="van-cell van-hairline van-field"><i class="van-icon van-icon-contact van-cell__left-icon">
            </i>
                <div class="van-cell__title"><span>密 码</span><!----></div>
                <div class="van-cell__value">
                    <div class="van-field__body"><input type="password"  placeholder="请输入密码" autocomplete="off" class="van-field__control">
                    </div>
                </div>
            </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import {NavBar, Row, Col, Icon, Toast, Field} from 'vant';

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Toast.name]: Toast,
            [Field.name]: Field
        },
        methods: {
            onClickLeft() {
                Toast('返回');
            },
            onClickRight() {
                Toast('按钮');
            }
        }

    };
</script>

<style type="text/css">

</style>