<template>
    <div class="like" @click="changeLike">
        <div class="like-img">
            <img v-if="!isLike" src="~assets/img/navbar/点赞1.png">
            <img v-else src="~assets/img/navbar/点赞-填充.png">
        </div>
        <div class="like-count"  :style="activeLikeColor">
            {{likeCount}}
        </div>
    </div>
</template>

<script>
    import {pollEssay, hasPollEssay, unPollEssay} from "../../../../network/article";
    import {addArticlePoll,isArticlePoll,getArticlePoll} from "../../../../network/article";

    export default {
        name: "Like",
        data() {
          return {
              likeCountColor: '#ffaa50',
              id: 0, // like组件所映射的实体的id
              isLike: false,
              likeCount: 0,
          }
        },
        props: {
            essayId: {
                type: Number,
                default: 0,
            },
            articleUserId: {
                type: Number,
                default: 0,
            }
        },
        methods: {
            changeLike() {
                let data = {
                    'entityId':this.essayId,
                    'entityUserId': this.articleUserId,
                    'entityType': 1,
                };

                addArticlePoll(data).then(res => {
                    this.isLike = true;
                    if (res.status == 200) {
                        this.likeCount = res.data.likeCount;
                        if (res.data.likeStatus == 1) {
                            this.isLike = true;
                        } else {
                            this.isLike = false;
                        }
                    }

                });







                // this.isLike = !this.isLike;
                // if (this.isLike) {
                //     // 点赞了
                //     pollEssay(this.essayId).then(res => {
                //         console.log("=============");
                //         console.log(res);
                //         if (res.status == 200) {
                //             this.likeCount = res.data.essayPollCount;
                //         }else {
                //             alert(res.msg);
                //         }
                //
                //     })
                //
                // } else {
                //     // 点赞取消了
                //     // this.isLike = !this.isLike;
                //     unPollEssay(this.essayId).then(res => {
                //         if (res.status == 200) {
                //             console.log(res)
                //             this.likeCount = res.data.essayPollCount;
                //         }else {
                //             alert(res.msg);
                //         }
                //     });
                // }
            },
            wetherLike() {
                let data = {
                    'entityId':this.essayId,
                    'entityUserId': this.articleUserId,
                    'entityType': 1,
                };
                isArticlePoll(data).then(res => {
                    if (res.status == 200) {
                        this.isLike = res.data.likeStatus == 1 ? true : false;
                    }

                });
            },
            getLikeCount() {
                let data = {
                    'entityId':this.essayId,
                    'entityUserId': this.articleUserId,
                    'entityType': 1,
                };
                getArticlePoll(data).then(res => {
                    if (res.status == 200) {
                        this.likeCount = res.data.likeCount;
                    }

                });
            }
        },
        computed: {
            activeLikeColor() {
                // 查看当前用户是否已对当前文章点赞


                return this.isLike ? {color:this.likeCountColor} : {}
            }
        },

        created() {
            this.getLikeCount();
            this.wetherLike();
        }
    }
</script>

<style scoped>
    .like {
        margin-top: 14px;
        position: relative;
    }
    .like img {
        height: 34px;
        width: 34px;
        vertical-align: middle;
    }

    .like-img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .like-count {
        position: absolute;
        color: #969696;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>