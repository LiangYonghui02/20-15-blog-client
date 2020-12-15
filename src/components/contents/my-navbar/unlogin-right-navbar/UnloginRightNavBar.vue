<template>
    <div class="unlogin-right-nav-bar">
        <a href="/login"><span class="login" :style="isBgcStyleActive" @mouseenter="changeBgc" @mouseleave="resetBgc" >登录</span></a>
        <a href="/regist"><span class="regist">注册</span></a>
        <a @mouseenter="enterColor"  @mouseleave="outColor"  @click="toWrite" :style="isChangeFontColor"  ref="write" ><span  :style="isChangeFontColor" class="write" >
                    <img src="~assets/img/navbar/创作-填充.png">
<!--                    <img v-else src="~assets/img/navbar/创作.png">-->
                    创作</span></a>
    </div>
</template>

<script>
    export default {
        name: "UnloginRightNavBar",
        data() {
            return {
                isChangeBgc:false,
                bgc:"rgba(255,211,80,0.32)",
                color: "#ffaa50",
                fontColor: false,
                click: false
            };
        },
        methods: {
            changeBgc(){
                this.isChangeBgc = true
            },
            resetBgc() {
                this.isChangeBgc = false
            },
            toWrite() {
                this.fontColor = true;
                this.click = true;
                this.$router.push('/write');
            },
            enterColor() {
                this.fontColor = true
            },
            outColor() {
                if (this.click) {
                    return
                } else {
                    this.fontColor = false
                }
            }
        },
        computed: {
            isBgcStyleActive() {
                return this.isChangeBgc ? {backgroundColor: this.bgc} : {}
            },
            isChangeFontColor() {
                return this.fontColor ? {color: this.color} : {}
            }
        }
    }
</script>

<style scoped>
    .unlogin-right-nav-bar {
        width: 100%;
        height: 56px;
    }


    .unlogin-right-nav-bar span {
        margin-left: 10px;
        float: left;
        font-size: 16px;
        transition: all .3s;
    }

    .login {
        width: 80px;
        height: 38px;
        line-height: 38px;
        margin: 7px 0 0 0;
        border: 1px solid rgba(246, 168, 50, 0.7);
        border-radius: 20px;
        font-size: 15px;
        color: #ffaa50;
        background-color: transparent;
        transition: none !important;
    }

    .write {
        transition: none !important;
    }

    .write img {
        display: inline-block;
        width: 28px;
        height: 28px;
        vertical-align: middle;
    }

    .regist {
        transition: none !important;
    }


    .regist:hover {
        color: #ffaa50;
    }


</style>