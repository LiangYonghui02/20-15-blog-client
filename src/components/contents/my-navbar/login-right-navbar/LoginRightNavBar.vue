<template>
    <div class="login-right-nav-bar">

        <a @mouseenter="enterColor"  @mouseleave="outColor"  @click="toWrite" :style="isChangeFontColor"  ref="write" ><span    :style="isChangeFontColor" class="write" >
                    <img src="~assets/img/navbar/创作-填充.png">
            <!--                    <img v-else src="~assets/img/navbar/创作.png">-->
                    创作</span></a>




        <my-dropdown></my-dropdown>
    </div>
</template>

<script>
    import MyDropdown from "../../../common/el-ui/my-dropdown/MyDropdown";
    import {mapGetters} from 'vuex';
    export default {
        name: "UnloginRightNavBar",
        components: {MyDropdown},
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
                if (this.$route.path.indexOf('/write') != -1) {
                    this.fontColor = true;
                    return;
                }
                this.fontColor = false;
            },
            changeFontColor() {
                this.fontColor = true
            }
        },
        computed: {
            ...mapGetters(['userInfo']),
            isBgcStyleActive() {
                return this.isChangeBgc ? {backgroundColor: this.bgc} : {}
            },
            isChangeFontColor() {
                return this.fontColor ? {color: this.color} : {}
            },


        },

        created() {
            if (this.$route.path.indexOf("/write") != -1) {
                this.changeFontColor()
            }
        }
    }
</script>

<style scoped>
    .login-right-nav-bar {
        width: 100%;
        height: 56px;
    }


    .login-right-nav-bar span {
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