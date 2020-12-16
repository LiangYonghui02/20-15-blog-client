<template>
    <div id="home">
        <my-nav-bar v-if="!isLogin"></my-nav-bar>
        <my-nav-bar2 v-else></my-nav-bar2>

        <lay-out v-loading="loading"
                >
            <div slot="left-layout">
                <article-list :articles="getHomeEssays"></article-list>
            </div>
            <div slot="right-layout">
               <introduce-writer></introduce-writer>
                <official-account></official-account>
                <introduce-read></introduce-read>
            </div>
        </lay-out>
        <my-footer class="my-footer" v-if="!loading"></my-footer>


    </div>
</template>

<script>
    import LayOut from "../../components/contents/layout/LayOut";
    import ArticleList from "../../components/contents/article-list/ArticleList";
    import IntroduceWriter from "../../components/contents/relative/IntroduceWriter";
    import OfficialAccount from "../../components/contents/relative/OfficialAccount";
    import IntroduceRead from "../../components/contents/relative/IntroduceRead";
    import MyFooter from "../../components/contents/footer/MyFooter";
    import MyNavBar from "../../components/contents/my-navbar/MyNavBar";
    import MyNavBar2 from "../../components/contents/my-navbar/MyNavBar2";
    import { mapGetters, mapMutations } from "vuex";
    import {listArticles} from '../../network/article';
    export default {
        name: "Home",
        inject:['reload'],
        components: {
            MyNavBar2,
            MyNavBar,
            MyFooter,
            IntroduceRead,
            OfficialAccount,
            IntroduceWriter,
            ArticleList,
            LayOut,
        },
        computed: {
            ...mapGetters(['userOnLine','userInfo','getHomeEssays'])
        },
        methods: {
            ...mapMutations(['setHomeEssays']),
            listEssays() {
                listArticles().then(res => {
                    console.log(res.data)
                    this.setHomeEssays(res.data)
                })
            }
        },
        data() {
            return {
                isLogin: false,
                loading:true
            }
        },
        created() {
            this.isLogin =  this.userOnLine;
            this.listEssays();
        },
        activated() {
            this.reload();
        },

        mounted() {
            this.loading =false;
        }

    }
</script>

<style scoped>
    .home-navbar {
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