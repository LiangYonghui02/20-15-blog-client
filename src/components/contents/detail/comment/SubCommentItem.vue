<template>
    <div class="sub-comment-item">
        <img class="head-img" :src="url">
        <span class="name"><a :href="'/mine/' + userId">{{nickname}}</a><b style="color: #969696; font-weight: 300"> 回复 </b><a  :href="'/mine/' + toUserId">{{toNickname}}</a> </span>
        <div class="time"> {{extime()}}</div>
        <div class="comment-container">
            <div class="comment-value">
                {{content}}
            </div>
            <like-or-comment :comment-id="id" :comment-user-id="toUserId"   :count="pollCount"></like-or-comment>


        </div>

        <!--               essayUserId   文章撰写者-->
        <my-collapse class="my-collapse"
                     :title="title"
                     :essay-writer="nickname"
                     :essay-id="articleId"
                     :father-comment="id"
                     :toUserId="userId"
                     btn-value="回复"></my-collapse>
    </div>

</template>

<script>
    import MyCollapse from "../../../common/el-ui/collapse/MyCollapse";
    import LikeOrComment from "../like/LikeOrComment";
    import moment from "moment";
    import {getEntityUserInfo} from "../../../../network/auth";
    export default {
        name: "SubCommentItem",
        data() {
            return {
                textarea1: '',
                title: '回复评论',
                comment: {
                    content:'',
                },
                url: ''
            }
        },
        components: {
            LikeOrComment,
            MyCollapse
        },
        props: {
            content: String,
            articleId: Number,
            fatherComment:Number,
            id:Number,
            nickname:String,
            time: String,
            toNickname:String,
            toUserId: Number,
            userId:Number,
            pollCount:Number,
            essayUserId:Number

        },

        methods: {
            extime() {
                return moment(this.time).format("YYYY-MM-DD HH:mm:ss")
            },
            test() {
                console.log('222222222222222222222222')
                console.log(this.content)
                console.log('222222222222222222222222')
            }
        },

        created() {
            this.test();
            getEntityUserInfo(this.userId).then(res => {
                this.url = res.data.avatarUrl;
                console.log(this.url)
            })
        },
        mounted() {

        },
        watch: {
            subComment(val) {
                this.subComment = val;
                console.log('====222=======3333')
                console.log(this.subComment)
            }

        }


    }
</script>

<style scoped>
    .sub-comment-item {
        /*padding: 10px 26px;*/
        margin-top: 20px;
    }

    .my-collapse {
        padding: 10px 0  !important;
    }

    .head-img {
        margin-right: 8px;
        vertical-align: top;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid #eee;
        min-width: 42px;
        min-height: 42px;
        width: 36px;
        height: 36px;
        overflow: hidden;
    }

    .name {
        position: relative;
        top: 4px;
        margin-top: 46px;
        font-size: 14px;
        font-weight: 500;
        margin-right: 8px;
    }

    a:hover {
        color: #ffaa50;
    }




    .time {
        color: #969696;
        font-size: 12px;
        margin: -16px 0 0 52px;
    }

    .comment-container {
        padding: 16px 0;
        border-bottom: 1px solid #EBEEF5;
    }

</style>