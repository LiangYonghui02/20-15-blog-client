<template>
    <div class="like-or-comment">
        <span v-if="isGood" @click="changeGood"><img class="head-img" src="~assets/img/navbar/点赞12.png"><i>{{likeCount}}</i></span>
        <span v-else @click="changeGood"><img class="head-img" src="~assets/img/navbar/点赞 4.png"><i>{{likeCount}}</i></span>
    </div>
</template>

<script>
    import {isCommentPoll,addCommentPoll,getCommentPoll} from "../../../../network/comment";
    import {addCollect} from "../../../../network/article";

    export default {
        name: "LikeOrComment",
        data() {
            return {
                isGood : false,
                likeCount: 5
            }
        },
        methods: {
            changeGood() {
                let data = {
                    'entityId':this.commentId,
                    'entityUserId': this.commentUserId,
                    'entityType': 2,
                };

                addCommentPoll(data).then(res => {
                    if (res.status == 200) {
                        this.likeCount = res.data.likeCount;
                        this.isGood = res.data.likeStatus;
                    }

                });


            },
        },

        props: {
            count: {
                type:Number,
                default:1
            },

            commentId: {
                type:Number,
                default:null
            },

            commentUserId: {
                type:Number,
                default:null
            },
        },

        created() {
            let data = {
                'entityId':this.commentId,
                'entityUserId': this.commentUserId,
                'entityType': 2,
            };
            getCommentPoll(data).then(res => {
                console.log(res)
                if (res.status == 200) {
                    this.likeCount = res.data.likeCount
                }
            })

            isCommentPoll(data).then(res => {
                if (res.status == 200) {
                    if (res.data.likeStatus == 1) {
                        this.isGood = true
                    }
                }

            })

        }

    }
</script>

<style scoped>
    .like-or-comment {
        margin-top: 20px;
    }



    .like-or-comment img {
        height: 20px;
        width: 20px;
        vertical-align: bottom;
        overflow: hidden;
    }

    .like-or-comment i {
        margin-top: 2px;
        padding-top: 6px;
    }
</style>