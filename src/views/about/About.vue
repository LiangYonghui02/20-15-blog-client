<template>
    <div id="about">
        <my-nav-bar v-if="!isLogin"></my-nav-bar>
        <my-nav-bar2 v-else></my-nav-bar2>
        <lay-out>
            <div slot="left-layout" class="data" v-html="essayData"></div>
        </lay-out>

        <my-footer></my-footer>
    </div>
</template>

<script>
    import MyFooter from "components/contents/footer/MyFooter";
    import MyNavBar from "../../components/contents/my-navbar/MyNavBar";
    import MyNavBar2 from "../../components/contents/my-navbar/MyNavBar2";
    import { mapGetters, mapMutations } from "vuex";
    import {essay} from "../../network/article";
    import LayOut from "../../components/contents/layout/LayOut";


    export default {
        name: "Home",
        computed: {
            ...mapGetters(['userOnLine','userInfo'])
        },
        data() {
            return {
                isLogin: false,
                essayData: ''
            }
        },
        created() {
            this.isLogin =  this.userOnLine;
            essay('1323983209452544002').then(res => {
                console.log(res.data)
                this.essayData = res.data.articleDetail.content

            })
        },
        components: {
            LayOut,
            MyNavBar2,
            MyNavBar,
            MyFooter,

            // UnloginRightNavBar,
            // NavBarItem,
            // NavBar,
            // SearchInput
        }
    }
</script>

<style scoped>


    .about-navbar {
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







</style>

<style>
    .about .data p {
        margin-bottom: 20px !important;
        word-break: break-word !important;
    }
</style>