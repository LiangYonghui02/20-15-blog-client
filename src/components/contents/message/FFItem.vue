<template>
    <div class="ff-item"  :style="bgc">
        <span><img :src="url"></span>
        <div class="r-top">
            <a class="user" :href="/mine/ + this.item.fromId" >{{name}}</a>
            <span class="time ff-time">{{extime}}</span>
        </div>
        <div class="time" @click="setRead">{{item.content}}</div>
    </div>
</template>

<script>
    import moment from 'moment';
    import {setAlreadyRead} from "../../../network/auth";
    import JSONbig from "json-bigint";
    import {getEntityUserInfo} from "../../../network/auth";

    export default {
        name: "FFItem",
        data() {
          return {
              info: JSONbig.parse(this.item.content),
              isRead: false,
              url: '',
              name: ''
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
                return  this.isRead ? {'background-color': '#fff'} : {'background-color': '#fff'}
            }


        },
        methods: {
            setRead() {
                // alert(1)
                // 设置已读
                // if (!this.isRead) {
                //     let data = {
                //         'messageId' : this.item.id
                //     }
                //     setAlreadyRead(data).then(res => {
                //         // alert(res.status)
                //         if (res.status == 200) {
                //             this.isRead = true;
                //         }
                //     })
                // }

                this.$emit('toMsgFrame',{fromId:this.item.fromId,toId:this.item.toId});



            },

            getInfo() {
                getEntityUserInfo(this.item.fromId).then(res => {
                    this.url = res.data.avatarUrl;
                    // alert(this.name = res.data.nickname)
                    this.name = res.data.nickname;
                    this.$forceUpdate();
                });
            }
        },

        created() {
           this.getInfo();
        }
    }
</script>

<style scoped>
    .ff-item {
        margin-left: 20px;
        padding-top: 20px;
        border-top: 1px solid #f0f0f0;
        background-color: #f6fbff;
        border-radius: 5px;
        padding-left: 16px;
    }
    .ff-item .r-top {
        display: inline-block;
        position: relative;
        top: 4px;
        left: 12px;
        font-size: 15px;
        color: #333;
    }
    .ff-item img {
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: top;
        overflow: hidden;
    }

    .ff-item .user {
        margin: 0 5px 0 0;
        color: #333;

    }
    .ff-item .article {
      color: #3194d0;
    }

    .ff-item .time {
        margin-top: 2px;
        font-size: 12px;
        position: relative;
        top: -18px;
        left: 54px;
        color: #969696;
        line-height: normal;
    }

    .ff-item .ff-time {
        position: absolute;
        display: inline-block;
        width: 200px;
        float: right;
        left: 300px;
        top: -10px;
    }

</style>