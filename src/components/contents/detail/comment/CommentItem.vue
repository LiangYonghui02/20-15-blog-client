<template>
    <div class="comment-item">
        <img class="head-img" :src="url">
<!--        <span class="name"><a :href="'/mine/o/' + comment.userId" class="a1" style="color: #333">{{comment.nickname}}</a> <b>@</b><a :href="'/mine/o/' + comment.toUserId" class="a2" style="color: #333"> {{comment.toNickname}}</a> </span>-->
        <span class="name"><a :href="'/mine/o/' + comment.userId" class="a1" style="color: #333">{{comment.nickname}}</a> </span>
        <div class="time">{{index + 1}}楼 {{extime()}}</div>
        <div class="comment-container">
            <div class="comment-value">
                {{comment.content}}

            </div>
            <like-or-comment :count="comment.pollCount" :comment-id="comment.id" :comment-user-id="comment.userId"></like-or-comment>
            <my-collapse
                    :essay-writer="comment.nickname" class="my-collapse"
                    :title="title"
                    :essay-id="comment.articleId"
                    :father-comment="comment.id"
                    :to-user-id="comment.userId"
                    btn-value="回复">

            </my-collapse>

            <div>
<!--                这里的是子评论的数据-->
                <sub-comment-item  v-for="{content,articleId,fatherComment,id,nickname,time,toNickname,toUserId,pollCount,userId} in this.subComments"
                                   :content="content" :articleId="articleId"
                                   :fatherComment="fatherComment"
                                   :id="id"
                                   :nickname="nickname"
                                   :time="time"
                                   :toNickname="toNickname"
                                   :toUserId="toUserId"
                                   :userId="userId"
                                   :pollCount="pollCount"
                                   :key="content" >
                </sub-comment-item>

            </div>




        </div>



    </div>
</template>

<script>
    import MyCollapse from "../../../common/el-ui/collapse/MyCollapse";
    import LikeOrComment from "../like/LikeOrComment";
    import SubCommentItem from "./SubCommentItem";
    import moment from "moment";
    import {getEntityUserInfo} from "../../../../network/auth";

    export default {
        name: "CommentItem",
        data() {
            return {
                textarea1: '',
                title: '回复评论',
                data:{},
                flag:false,
                commentItem:[],
                url: ""

            }
        },
        props: {
            comment:{
                type:Object,
                default() {
                    return{}
                }
            },
            subComments: {
                type:Object,
                default() {
                    return{}
                }
            },
            index: {
                type: Number,
                default: 2,
            },
            essayUserId: {
                type:Number,
                default:null
            },

        },
        methods: {
            test() {
                this.data = this.subComments;
                console.log("------------------------------")
                console.log(this.comment)
                console.log(this.subComments)
                for (let i = 0; i < this.subComments.length; i++) {
                    this.commentItem.push(this.subComments[i])
                }
                console.log("=======================")
                console.log(this.commentItem)
                console.log(this.index)
                console.log("------------------------------")

            },
            extime() {
                return moment(this.comment.time).format("YYYY-MM-DD HH:mm:ss")
            }
        },
        components: {
            SubCommentItem,
            LikeOrComment,
            MyCollapse

        },
        created() {
            this.test();
            let id = this.comment.userId;
            getEntityUserInfo(id).then(res => {
                this.url = res.data.avatarUrl;
                console.log(this.url)
            })
        },

        mounted() {

        }


    }
</script>

<style scoped>

    .my-collapse {
        padding: 10px 0  !important;
    }

    .comment-item {
        padding: 10px 26px;
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

    .name a:hover
   {
        color: #ffaa50 !important;
    }




    .time {
        color: #969696;
        font-size: 12px;
        margin: -16px 0 0 52px;
    }

    .comment-container {
        padding: 16px 9%;
        border-bottom: 1px solid #EBEEF5;
    }



</style>