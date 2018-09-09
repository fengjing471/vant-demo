<template>
    <div>

        <van-nav-bar title="系统登陆">
            <van-icon name="arrow-left" slot="left" @click="onClickLeft"/>
            <van-icon name="idcard" slot="right" @click="onClickRight"/>
        </van-nav-bar>

        <div class="h-50"></div>

        <van-cell-group>
            <van-field
                    v-model="username"
                    label="用户名"
                    placeholder="请输入用户名"
                    left-icon="contact"
                    required
            />
            <van-field
                    v-model="username"
                    label="密 码"
                    placeholder="请输入密码"
                    left-icon="records"
                    type="password"
                    required
            />
        </van-cell-group>

        <div class="h-30"></div>

        <van-button type="primary" size="large" @click="onLogin">登 陆</van-button>

    </div>
</template>

<script>
    import {NavBar, Row, Col, Icon, Toast, Field,
        Cell, CellGroup,
        Button
    } from 'vant';

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Toast.name]: Toast,
            [Field.name]: Field,

            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,

            [Button.name]: Button
        },
        data() {
            return {
                username:'18678651029',
                password:'123456'
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            },
            onClickRight() {
                Toast('模块建设中');
            },
            onLogin() {
                //let url="/kbuser/api/user/login";
                let url="/piuser/login";
                let params = {username: this.username, password: this.password};
                this.$http.post(url, params)
                    .then(function (res) {
                        console.log(res);

                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        }

    };
</script>

<style type="text/css">

</style>