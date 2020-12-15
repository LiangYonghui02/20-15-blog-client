<template>
    <div class="like-entity" @click="setRead" :style="bgc">
        <span><img :src="url"></span>
        <div class="r-top">
            <div v-if="info.entityType == 1"><a class="user" :href="/mine/+this.item.fromId" >{{info.collectUser}}</a> {{actionType}}了你的{{entityType}}<a  :href="'/essay/' + info.entityId"  class="article">《{{info.articleName}}》</a>
            </div>
            <div v-else>
                <a class="user" >{{info.collectUser}}</a> 点赞了你关于文章<a :href="'/essay/' + info.entityId" class="article">《{{info.articleName}}》</a>的评论:"{{info.commentText}}"
            </div>
        </div>
        <div class="time">{{extime}}</div>
    </div>
</template>

<script>
    import moment from 'moment';
    import {setAlreadyRead} from "../../../network/auth";
    import JSONbig from "json-bigint";
    import {getEntityUserInfo} from "../../../network/auth";

    export default {
        name: "LikeEntity",
        data() {
          return {
              info: JSONbig.parse(this.item.content),
              isRead: false,
              url: ''
          }
        },
        props: {
            item: {
                type: Object,
                default() {}
            },


        },
        computed: {
            extime() {
                return moment(this.item.createTime).format("YYYY-MM-DD HH:mm:ss")
            },
            actionType() {
                return this.item.conversationId == 'collect' ? "收藏" : "点赞"
            },

            // 如果是点赞了评论还得继续判断
            entityType() {
                return this.info.entityType == 1 ? "文章" : "评论"

            },
            bgc() {
                return  this.isRead ? {'background-color': '#fff'} : {'background-color': '#f6fbff'}
            }


        },
        methods: {
            setRead() {
                // 设置已读
                if (!this.isRead) {
                    let data = {
                        'messageId' : this.item.id
                    }
                    setAlreadyRead(data).then(res => {
                        // alert(res.status)
                        if (res.status == 200) {
                            this.isRead = true;
                        }
                    })
                }


            }
        },

        created() {
            getEntityUserInfo(this.item.fromId).then(res => {
                this.url = res.data.avatarUrl;
            });
        }
    }
</script>

<style scoped>
    .like-entity {
        margin-left: 20px;
        padding-top: 20px;
        border-top: 1px solid #f0f0f0;
        background-color: #f6fbff;
        border-radius: 5px;
        padding-left: 16px;
    }
    .like-entity .r-top {
        display: inline-block;
        position: relative;
        top: 4px;
        left: 12px;
        font-size: 15px;
        color: #333;
    }
    .like-entity img {
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: top;
        overflow: hidden;
    }

    .like-entity .user {
        margin: 0 5px 0 0;
        color: #333;

    }
    .like-entity .article {
      color: #3194d0;
    }

    .like-entity .time {
        margin-top: 2px;
        font-size: 12px;
        position: relative;
        top: -18px;
        left: 54px;
        color: #969696;
        line-height: normal;
    }

</style>