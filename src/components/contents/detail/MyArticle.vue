<template>
    <div class="my-article">
        <lay-out class="lay-out">
            <div slot="left-layout" class="left-layout">
                <article-detail class="article-detail">
                    <div slot="article-relative">
                        <img class="head-img" :src="essayData.avatarUrl">
                        <span class="writer-name"><a :href="'/mine/'+essayData.article.userId">{{essayData.article.writer}}</a> </span>
                        <div class="time">{{extime}} | 阅读数：{{essayData.article.readCount}}</div>
                    </div>
                    <div slot="article-title">{{essayData.article.title}}</div>
                    <div slot="article-content" class="article-content" v-html="essayData.articleDetail.content">


                    </div>
                </article-detail>
                <like  :essayId="essayData.article.id" :articleUserId="essayData.article.userId"></like>
                <comment :commentCount="essayData.article.commentCount"
                         :essayId="essayData.article.id"
                         :toUserId="essayData.article.userId"
                         :essayWriter="essayData.article.writer">

                </comment>


            </div>
            <div slot="right-layout">
                <introduce-read class="right-layout"></introduce-read>
            </div>
        </lay-out>
        <collect :entityUserId="this.essayData.article.userId" :essayId="this.essayData.article.id" :collectCount="this.essayData.collectCount"></collect>
    </div>
</template>

<script>
    import LayOut from "components/contents/layout/LayOut";
    import ArticleList from "components/contents/article-list/ArticleList";
    import IntroduceRead from "components/contents/relative/IntroduceRead";
    import Swiper from "components/common/swiper/Swiper";
    import ArticleDetail from "components/contents/detail/ArticleDetail";
    import Like from "components/contents/detail/like/Like";
    import Comment from "components/contents/detail/comment/Comment";
    import moment from "moment";
    import {getComments} from "../../../network/comment";
    import {mapGetters, mapMutations} from "vuex";
    import Collect from "./collect/Collect";
    import {getEntityUserInfo} from "../../../network/auth";

    export default {
        name: "MyArticle",
        data() {
            return {
                thisEntityInfo: {}
            };
        },
        methods: {
            ...mapMutations(['setComments']),
            getArticleComment() {
                getComments(this.essayData.article.id).then(res => {
                    console.log('========getComments===========')
                        console.log(res);
                        this.setComments(res.data);
                    }
                );
            },

        },
        props: {
            essayData: {
                type: Object,
                defalut() {
                    return {}
                }
            },
        },
        components: {
            Collect,
            // Article,
            Comment,
            Like,
            ArticleDetail,
            IntroduceRead,
            // ArticleList,
            LayOut,
        },
        computed: {
            ...mapGetters(['getComments']),
            extime() {
                return moment(this.essayData.article.createTime).format("YYYY-MM-DD HH:mm:ss")
            }
        },
        created() {
            this.getArticleComment();


        },
        mounted() {

        },



    }
</script>

<style scoped>
    .head-img {
        margin-right: 8px;
        vertical-align: top;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid #eee;
        min-width: 48px;
        min-height: 48px;
        width: 48px;
        height: 48px;
        overflow: hidden;
    }


    .writer-name {
        position: relative;
        top: 8px;
        margin-top: 46px;
        font-size: 16px;
        font-weight: 500;
        margin-right: 8px;
    }

    .writer-name:hover a {
        color: #ffaa50;
    }


    .time {
        color: #969696;
        font-size: 12px;
        margin: -18px 0 0 58px;
    }

    .article-content {
        word-spacing: 10px;
    }

    .left-layout {
        /*margin-right: 3% !important;*/
        margin-left: -10%;
        width: 800px;
    }

    .right-layout {
        width: 240px;
        float: right !important;
        margin-left: -60px !important;
    }

    .lay-out {
        padding-bottom: 40px;
    }

    .article-detail {
        padding-bottom: 40px;
    }

    .article-content {
        overflow: hidden;
    }

    .article-content img {
        max-width: 100px !important;
    }

    img {
        max-width: 100px !important;
    }





</style>

<style>

    .article-content * {
        margin-bottom: 20px !important;
        word-break: break-word !important;
    }

    .article-content img {
        width: 100%;
        height: 1000%;
    }



</style>