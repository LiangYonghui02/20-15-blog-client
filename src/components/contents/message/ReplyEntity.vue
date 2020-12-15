<template>
    <div class="reply-entity" :style="bgc" @click="setRead">
        <div class="top">
            <span><img :src="url"></span>
            <div class="r-top">
                <div  v-if="info.entityType == 1"><a class="user" :href="/mine/+this.item.fromId" >{{info.senderName}}</a> 评论了你的文章<a   class="article" :href="'/essay/' + info.articleId ">《{{info.articleName}}》</a>
                </div>
                <div v-else><a class="user" >{{info.senderName}}</a> 回复了你的评论："{{info.fatherComment}}"
                </div>
            </div>
            <div class="time">{{extime}}</div>
            <p>{{info.commentText}}</p>
        </div>
        <div class="func">
            <span @click="reply"><img src="~assets/img/navbar/回复.png">回复</span>
            <span><img src="~assets/img/navbar/查看填充.png"><a :href="'/essay/' + info.articleId ">查看</a></span>
        </div>
        <div class="bottom" v-show="isReply">
            <el-input
                    type="textarea"
                    :rows="3" resize="none"
                    :placeholder="'@'+info.senderName"
                    v-model="textarea"
            >
            </el-input>
            <div class="send">
                <span><el-button class="send-button" size="18"  type="success" round @click.native="sendReply">发送</el-button></span>
                <span class="reject" @click="reply">取消</span>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import {setAlreadyRead} from "../../../network/auth";
    import JSONbig from "json-bigint";
    import {addComment} from "../../../network/comment";
    import {getEntityUserInfo} from "../../../network/auth";

    export default {
        name: "ReplyEntity",
        data() {
            return {
                textarea: "",
                isReply: false,
                name: '李四',

                info: JSONbig.parse(this.item.content),
                isRead: false,

                url: '',
            }
        },
        props: {
            item: {
                type: Object,
                default() {}
            },

        },
        computed: {

            bgc() {
                return  this.isRead ? {'background-color': '#fff'} : {'background-color': '#f6fbff'}
            },
            extime() {
                return moment(this.item.createTime).format("YYYY-MM-DD HH:mm:ss")
            },
        },
        methods: {

            change(e) {
                this.$forceUpdate();
            },
            reply() {
                this.isReply = !this.isReply;
            },
            setRead() {
                // alert(this.info.articleId)
                console.log(this.info)
                // 设置已读
                if (!this.isRead) {
                    let data = {
                        'messageId' : this.item.id
                    }
                    setAlreadyRead(data).then(res => {
                        if (res.status == 200) {
                            this.isRead = true;
                        }
                    })
                }
            },

            sendReply() {




                let data = {
                    content: this.textarea,
                    articleId: this.info.articleId,
                    toUserId: this.item.fromId,
                    parentId: this.info.commentOrReplyId

                };

                this.textarea = ''

                console.log("===================================")
                console.log(data)

                addComment(data).then(res => {
                    console.log(res)
                });

                this.reply();

            }

        },

        created() {
            getEntityUserInfo(this.item.fromId).then(res => {
                alert(res.status)
                this.url = res.data.avatarUrl;
            });
        }
    }
</script>

<style scoped>
    .reply-entity {
        overflow: hidden;
        margin-left: 20px;
        border-top: 1px solid #f0f0f0;
        padding-top: 20px;
        background-color: #f6fbff;
        border-radius: 5px;
        padding-left: 16px;
    }
    .reply-entity .top .r-top {
        display: inline-block;
        position: relative;
        top: 4px;
        left: 12px;
        font-size: 15px;
        color: #333;
    }
    .reply-entity .top img {
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: top;
        overflow: hidden;
    }

    .reply-entity .top .user {
        margin: 0 5px 0 0;
        color: #333;

    }
    .reply-entity .top .article {
        color: #3194d0;
    }

    .reply-entity .top p {
        margin-top: -6px;
        margin-bottom: 10px;
        margin-left: 54px;
        font-size: 15px;
        line-height: 1.7;
    }

    .reply-entity .top .time {
        margin-top: 2px;
        font-size: 12px;
        position: relative;
        top: -18px;
        left: 54px;
        color: #969696;
        line-height: normal;
    }




    .reply-entity .func {
        margin-bottom: 10px;
        float: left;
        margin-right: 30px;
        font-size: 13px;
        color: #969696;
    }

    .reply-entity .func span {
        display: inline-block;
        margin-right: 30px;
    }


    .reply-entity .func span:hover {
        color: #333;
    }

    .reply-entity .func img {
        vertical-align: top;
        margin-right: 5px;
        height: 16px;
        width: 16px;
    }

    .reply-entity .send-button {
        float: right;
        box-sizing: border-box;
        font-size: 14px;
        padding: 8px 14px;
        margin: 10px 30px 0 0;
    }

    .reply-entity .reject {
        float: right;
        margin: 15px 30px 0 0;
        font-size: 16px;
        color: #969696;
    }




</style>

<style>


    .reply-entity textarea {
        background-color: hsla(0,0%,71%,.1) !important;
    }


</style>

