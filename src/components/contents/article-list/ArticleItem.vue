<template>
    <div class="article-item">
        <div class="article-title">
            <a target="_blank"  :href="'/essay/'+articleData.id">{{articleData.title}}</a>
        </div>
        <div>
            <p class="article-intro">
                {{articleData.summary}}
                <!--                ：晚安宇宙人 哪吒:“我去你个鸟 -&#45;&#45; 公众号：晚安宇宙人 哪吒:“我去你个鸟 -&#45;&#45; 公众号：晚安宇宙人 哪吒:“我去你个鸟去你个鸟命，我命由我不由天，是魔是仙，我自己说了算！”——《哪吒之魔童降世》 强行安排一波...-->
            </p>
        </div>

        <a class="article-writer" v-if="articleData.userId != userId" target="_blank" :href="'/mine/'+articleData.userId">{{articleData.writer}}</a>

        <span>
             <img src="~assets/img/navbar/评论.png" class="comment-count">
            {{articleData.commentCount}}
           </span>
        <span>
                <img src="~assets/img/navbar/点赞 4.png" class="like-count">
              {{articleData.pollCount}}
            </span>
        <span>
                <img src="~assets/img/navbar/阅读数.png" class="read-count">
               {{articleData.readCount}}
            </span>
        <span>{{extime}}</span>
    </div>
</template>

<script>
    import moment from 'moment';
    import {mapGetters} from 'vuex';
    export default {
        name: "ArticleItem",
        data() {
            return {
                articleData: this.data,
                time:'',
            }
        },
        props: {
            data: {
                type: Object,
                defalut: {}
            },



        },
        computed: {
            ...mapGetters(['userId']),
            showWriter() {
                return this.$route.path.indexOf("/mine") == -1 ? true : false;
            },

            extime() {
                return moment(this.articleData.createTime).format("YYYY-MM-DD HH:mm:ss")
            }
        },
        methods: {

        },
        created() {


        }
    }
</script>

<style scoped>
    .article-title {
        display: block;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 6px;

    }

    .article-title a {
        transition: all .3s;
    }

    .article-title a:hover {
        color: #ffaa50;
    }

    .article-intro {
        display: block;
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }

    .comment-count,
    .like-count,
    .read-count {
        width: 12px;
        height: 12px;

    }

    .article-writer {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        transition: all .5s;
        margin-right: 16px;
    }

    .article-writer:hover {
        color: #666666;
    }

    span {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        margin-right: 4px;
    }

</style>