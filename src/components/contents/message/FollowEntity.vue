<template>
    <div class="follow-entity" @click="setRead" :style="bgc">
        <span><img :src="url"></span>
        <div class="r-top">
            <a class="user" :href="/mine/ + this.item.fromId" >{{info.followerName}}</a>关注了你。
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
        name: "FollowEntity",
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
    .follow-entity {
        margin-left: 20px;
        padding-top: 20px;
        border-top: 1px solid #f0f0f0;
        background-color: #f6fbff;
        border-radius: 5px;
        padding-left: 16px;
    }
    .follow-entity .r-top {
        display: inline-block;
        position: relative;
        top: 4px;
        left: 12px;
        font-size: 15px;
        color: #333;
    }
    .follow-entity img {
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: top;
        overflow: hidden;
    }

    .follow-entity .user {
        margin: 0 5px 0 0;
        color: #333;

    }
    .follow-entity .article {
      color: #3194d0;
    }

    .follow-entity .time {
        margin-top: 2px;
        font-size: 12px;
        position: relative;
        top: -18px;
        left: 54px;
        color: #969696;
        line-height: normal;
    }

</style>