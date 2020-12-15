<template>
    <div class="login">
        <div class="logo">
            <img @click="toIndex" class="f-logo" src="~assets/img/common/F.png">
        </div>
        <div class="login-page" :style="isLoginPage">

            <div class="title">
                <a @click="loginClick" :class="{'login-active':loginActive}">登录</a>
                <b>|</b>
                <a @click="registClick" :class="{'regist-active':registActive}">注册</a>
            </div>


            <form>
                <div v-if="loginActive" class="login-form">
                    <div class="input-prepend restyle js-normal">
                        <input  maxlength="20" placeholder="邮箱" type="email"  v-model="email">
                        <img class="img" src="~assets/img/navbar/邮箱.png">
                    </div>
                    <div class="input-prepend restyle js-normal">
                        <input  maxlength="20" placeholder="输入密码" type="password"  v-model="password" >
                        <img class="img" src="~assets/img/navbar/密码.png">
                    </div>
                    <el-button @click="subLogin" class="login-button" type="warning" round>登录</el-button>
<!--                    <img class="logo2" src="~assets/img/navbar/logo2.png">-->
                </div>

                <div v-else class="regist-form">
                    <div class="input-prepend restyle js-normal">
                        <input  maxlength="20" placeholder="昵称" type="text" v-model="nickname"  >
                        <img class="img" src="~assets/img/navbar/昵称.png">
                    </div>
                    <div class="input-prepend restyle js-normal">
                        <input maxlength="20" placeholder="邮箱" type="email" v-model="email" >
                        <img class="img" src="~assets/img/navbar/邮箱.png">
                    </div>
                    <div class="input-prepend restyle js-normal s-input-con">
                        <input maxlength="6" placeholder="验证码" type="text" class="s-input" v-model="vercode"  >
                        <img class="img" src="~assets/img/navbar/验证码.png" >
                        <el-button @click="sendEmail" type="success" round class="send-email">发送验证码</el-button>
                    </div>
                    <div class="input-prepend restyle js-normal" >
                        <input placeholder="设置密码" type="password" maxlength="20" v-model="password" >
                        <img class="img" src="~assets/img/navbar/密码.png">
                    </div>

                    <el-button   class="login-button" type="success" round  @click="subRegiter">注册</el-button>
<!--                    <img class="logo2" src="~assets/img/navbar/logo2.png">-->
                </div>

            </form>



        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    import {getVerCode,register,userLogin} from "../../network/auth";

    export default {
        name: "Login",
        data() {
            return {
                activeName: 'second',
                loginActive: true,
                registActive: false,
                email:'',
                password: '',
                nickname: '',
                vercode: ''
            };
        },
        methods: {

            handleClick(tab, event) {
                console.log(tab, event);
            },
            ...mapMutations([
                'setUserInfo',
                'setUserId',
                'setToken'
            ]),
            loginClick() {
                this.registActive = false;
                this.loginActive = true;
                this.$router.replace('/login')
            },
            registClick() {
                this.loginActive = false;
                this.registActive = true;
                this.$router.replace('/regist')
            },
            isRegist() {
                if (this.$route.path.indexOf('/regist') != -1) {
                    this.loginActive = false
                    this.registActive = true
                }
            },
            toIndex() {
                this.$router.replace('/')
            },
            sendEmail() {
                getVerCode(this.email).then(res => {
                    alert(res.msg)
                })
            },
            subRegiter() {
                let data = {
                    'nickname':this.nickname,
                    'password':this.password,
                    'email':this.email,
                    'vercode':this.vercode
                }
                let vercode = {'vercode':this.vercode}
                register(data,vercode).then(res=> {
                    alert(res.msg)
                    this.$router.replace('/login');
                })
            },
            subLogin() {
                let data = {
                    'password':this.password,
                    'email':this.email,
                }
                userLogin(data).then(res=>{
                    console.log(res);
                    alert(res.msg);
                    this.setUserId(res.data.userInfo.userId);
                    this.setUserInfo(res.data.userInfo);
                    this.setToken(res.data.jwtCert);
                    this.$router.replace('/home');
                })
            }
        },
        computed: {
            isLoginPage() {
                return this.loginActive ? {
                    height:'400px',
                } : {}
            },
            ...mapGetters({
                token: "token",
                userInfo:"userInfo",
                userId:"userId"
            })
        },
        created() {
            this.isRegist();
        }
    }
</script>

<style scoped>
    .login {
        background-color: #f1f1f1;
        height: 800px;
    }

    .logo img {
        height: 160px;
        width: 160px;
        margin: 50px 50px;
    }

    .login-page {
        height: 500px;
        width: 400px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        margin: 0 auto;
        margin-top: -150px;
        overflow: hidden;

    }

    .login  .restyle input {
        border-bottom: none;
        border-radius: 5px;

    }
    .login  .input-prepend input {
        width: 200px;
        height: 34px;
        padding: 4px 12px 4px 55px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .send-email {
        position: absolute;
        top: 6px;
        right: 138px;
        height: 32px;;
        line-height: 0px;
        border-radius: 50%;
    }



    /*.login  .input-prepend .s-input {*/
    /*    !*position: absolute;*!*/
    /*    width: 200px;*/
    /*    height: 34px;*/
    /*    padding: 4px 12px 4px 55px;*/
    /*    border: 1px solid #c8c8c8;*/
    /*    border-radius: 0 0 4px 4px;*/
    /*    background-color: hsla(0,0%,71%,.1);*/
    /*    vertical-align: middle;*/
    /*    margin-bottom: 10px;*/
    /*    border-radius: 5px;*/
    /*}*/

    .input-prepend {
        position: relative;
        left: 66px;
    }

    .login-page .img {
        position: absolute;
        left: 0;
        top: 12px;
        height: 20px;
        width: 20px;
        margin-left: 10px;
    }

    form {
        margin-top: 50px;
        /*background-color: pink;*/
        /*margin: 0 auto;*/
        /*padding: 0 20%;*/
        overflow: hidden;
    }

    .login-button {
        width: 200px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 9px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        cursor: pointer;
        outline: none;
        display: block;
        clear: both;
    }

    .logo2 {
        width: 60%;
        margin-top: -40px;
        margin-left: 76px;
    }

    .title {
        width: 140px;
        margin: 0 auto;
        margin-top: 50px;
    }

    .title a {
        padding: 10px;
        color: #969696;
        font-weight: 400;
        font-size: 18px;
    }

    .title b {
        padding: 10px;
        color: #969696;
    }

    .title .login-active {
        font-weight: 700;
        color: #ffaa50;
        border-bottom: 2px solid #ffaa50;
    }

    .title .regist-active {
        font-weight: 700;
        color: #ffaa50;
        border-bottom: 2px solid #ffaa50;
    }




</style>