<template>
    <div class="my-nav-bar2">
        <nav-bar class="navbar">
            <div slot="left" class="logo-container">
                <a href="/">
                    <img src="~assets/img/common/logo.png" id="logo">
                </a>
            </div>
            <div slot="center" class="center-container">
                <nav-bar-item path="/home">
                    <img slot="item-icon" src="~assets/img/navbar/首页.png" alt="">
                    <img slot="item-icon-active" src="~assets/img/navbar/首页-填充.png" alt="">
                    <div slot="item-text">首页</div>
                </nav-bar-item>
                <nav-bar-item path="/message">
                    <img slot="item-icon" src="~assets/img/navbar/消息.png" alt="">
                    <img slot="item-icon-active" src="~assets/img/navbar/消息-填充.png" alt="">
<!--                    <div slot="item-text">消息<span class="unread">{{getMessageCount}}</span></div>-->
                    <div slot="item-text">消息</div>

                </nav-bar-item>
                <nav-bar-item path="/essay/1339204706039320578">
                    <img slot="item-icon" src="~assets/img/navbar/意见.png" alt="">
                    <img slot="item-icon-active" src="~assets/img/navbar/意见-填充.png" alt="">
                    <div slot="item-text">关于本站</div>
                </nav-bar-item>
                <search-input></search-input>
            </div>
            <div slot="right">
                <login-right-nav-bar></login-right-nav-bar>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import NavBarItem from "components/common/navbar/NavBarItem";
    import SearchInput from "components/contents/search/SearchInput";
    import LoginRightNavBar from "./login-right-navbar/LoginRightNavBar";
    import {mapGetters,mapMutations} from 'vuex';
    import {SET_MESSAGE_COUNT} from "../../../store/types";
    import {getUnReadMessageCount} from "../../../network/auth";
    import {setMessageCount} from "../../../store/mutations";

    export default {
        name: "MyNavBar2",
        data() {
            return {

            }

        },
        components: {
            LoginRightNavBar,
            NavBarItem,
            NavBar,
            SearchInput
        },
        computed: {
            ...mapGetters(['getMessageCount']),
        },
        methods: {
            ...mapMutations(['setMessageCount']),
            getCount() {
                getUnReadMessageCount().then(res =>  {
                    this.$store.commit(SET_MESSAGE_COUNT,res.data.messageCount)
                })
            }
        },
        created() {

            // 轮询
            // window.setInterval(() => {
            //     setTimeout( this.getCount(),0);
            //
            // }, 3000)

        }


    }
</script>

<style scoped>
    .my-nav-bar2 {
        position: sticky;
        z-index: 99999999999999999999;
        top: 0px;
    }
    .navbar {
        height: 56px;
    }

    #logo {
        height: 46px;
        padding: 5px 0;
        background-color: #fff;
    }

    .logo-container {
        width: 200px;
    }

    .center-container {
        width: 100%;
        margin: 0 auto;
        height: 56px;

    }

    .unread {
        background-color: red;
        color: #fff;
        font-size: 10px;
        border-radius: 50%;
        position: relative;
        padding: 3px;
        top: -12px;
        left: 0;
    }




</style>