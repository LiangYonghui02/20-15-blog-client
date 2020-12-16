<template>
    <div class="my-tab2">
        <el-tabs :tab-position="tabPosition" style="min-height: 600px;" :before-leave="beforeLeave"
                 :active-name="tabName">
            <el-tab-pane label="评论回复" name="first">
                <type-title text="评论和回复"></type-title>
                <reply-entity v-for="item in commentAndReplyData" :item="item" :key="item"></reply-entity>

            </el-tab-pane>
            <el-tab-pane label="赞和收藏" name="second">
                <type-title text="收到的赞和收藏"></type-title>
                <div class="list">
                    <like-entity v-for="item in likeAndCollectData" :item="item" :key="item"></like-entity>
                </div>
            </el-tab-pane>
            <el-tab-pane label="收到关注" name="third">
                <type-title text="收到的关注"></type-title>
                <follow-entity v-for="item in followData" :item="item" :key="item"></follow-entity>

            </el-tab-pane>
            <el-tab-pane label="FF-笺驿" name="fourth">

                <div class="before-msg" v-if="isBeforeMsg">
                    <type-title text="收到的短笺"></type-title>
                    <f-f-item v-for="item in lastMsgData" :item="item" @toMsgFrame="toMsgFrame" :key="item"></f-f-item>
                </div>
                <div class="msg-frame" v-else >
                    <type-title :text="'与  【'+this.name+'】  对话'"></type-title>
                    <div class="msg-body">

                        <!--                        item.conversationId == this.toId + '' + this.fromId-->

                        <ul class="list" v-scrollBar>
                            <div v-for="item in msgData" :key="item">
                                <div v-if="item.fromId == userId">
                                    <own-msg-item :own-url="userUrl" :msg-text="item.content" :item="item"
                                                  :key="item"></own-msg-item>
                                </div>
                                <div v-else>
                                    <opposite-msg-item :opposite-url="oppositeUrl" @getName="getName"
                                                       :msg-text="item.content" :item="item"
                                                       :key="item"
                                    ></opposite-msg-item>
                                </div>
                            </div>
                        </ul>

                    </div>
                    <div class="msg-enter">
                        <el-input
                                resize="none"
                                class="msg-input"
                                type="textarea"
                                :show-word-limit="true"
                                :size="'20'"
                                title="输入内容请在20字以内。"
                                :autosize="{ minRows: 4, maxRows: 4}"
                                placeholder="请输入内容"
                                v-model="textarea2">
                        </el-input>
                        <el-button @click.native="sendMsg" type="warning" class="send-msg-btn" round>发送</el-button>
                    </div>
                </div>

            </el-tab-pane>
            <el-tab-pane label="网站公告" name="fifth">
                <type-title text="网站公告"></type-title>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import LikeEntity from "../../../contents/message/LikeEntity";
    import TypeTitle from "../../../contents/message/TypeTitle";
    import ReplyEntity from "../../../contents/message/ReplyEntity";
    import {getLikeOrCollectMessage, getCommentAndReply, getFollow} from "../../../../network/auth";
    import FollowEntity from "../../../contents/message/FollowEntity";
    import FFItem from "../../../contents/message/FFItem";
    import OwnMsgItem from "../../../contents/message/OwnMsgItem";
    import OppositeMsgItem from "../../../contents/message/OppositeMsgItem";
    import {sendWSMessage, getWSMessage, getWSLastMessage} from "../../../../network/auth";
    import {mapGetters} from 'vuex';
    import {baseInfo} from "../../../../network/mine";

    export default {
        name: "MyTab2",
        components: {OppositeMsgItem, OwnMsgItem, FFItem, FollowEntity, ReplyEntity, TypeTitle, LikeEntity},
        data() {
            return {
                tabPosition: 'left',
                likeAndCollectData: {},
                commentAndReplyData: {},
                followData: {},
                // isBeforeMsg: true,
                count: 10,
                loading: false,
                textarea2: '',
                msgData: [],
                fromId: '',
                toId: '',
                name: '对方',
                userUrl: '',
                oppositeUrl: '',
                lastMsgData: []

            };
        },

        computed: {
            ...mapGetters(['userId']),
            noMore() {
                return this.count >= 20
            },
            disabled() {
                return this.loading || this.noMore
            },

        },

        props: {
            tabName: {
                type: String,
                default: 'first'
            },
            isBeforeMsg: {
                type: Boolean,
                default: false,  // true
            },

            conversationId: {
                type: String, Number,
            },

            from: {
                type: String, Number,
            },

            to: {
                type: String, Number,
            }
        },

        methods: {
            toMsgFrame(msg) {
                // 构建会话id
                let convarsationId;
                convarsationId = msg.fromId + '' + msg.toId;
                // if (msg.fromId > msg.toId) {
                //     convarsationId = msg.toId + '' + msg.fromId;
                // } else {
                //     convarsationId = msg.fromId + '' + msg.toId;
                // }
                this.isBeforeMsg = false;
                // this.$forceUpdate();
                // this.isBeforeMsg = false;
                this.conversationId = convarsationId;
                // alert(this.conversationId)

                this.fromId = msg.fromId;
                this.toId = msg.toId;





                // 获取数据
                let data = {
                    'userId': msg.toId,
                    'oppositeId': msg.fromId
                };
                getWSMessage(data).then(res => {
                    console.log(res.data);
                    this.msgData = res.data.messages;
                    this.userUrl = res.data.userUrl;
                    this.oppositeUrl = res.data.oppositeUrl;
                });
                // 建立连接
                this.initWebSocket(this.conversationId);

                baseInfo(msg.fromId).then(res => {
                    this.name = res.data.username;

                })

                // this.isBeforeMsg = false;
                // this.isBeforeMsg = false;
            },

            // beforeLeave() {
            //     this.isBeforeMsg = true;
            // },

            sendMsg() {
                // alert(this.textarea2);
                if (this.textarea2 == '') {
                    return;
                }
                let data = {
                    'content': this.textarea2,
                    'fromId': this.toId,
                    'toId': this.fromId,
                    // toId就是自己
                    conversationId: this.toId + '' + this.fromId
                };
                sendWSMessage(data).then(res => {
                    if (res.status == 200) {
                        var content = this.textarea2;
                        this.msgData.push({
                            'content': content,
                            'fromId': this.toId,
                            'toId': this.fromId
                        });

                        this.textarea2 = '';
                    }
                })


            },


            getName(name) {
                this.name = name;
            },


            initWebSocket: function (id) {
                // alert(this.isBeforeMsg)
                // id 会话id
                // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
                this.websock = new WebSocket("ws://localhost:8000/websocket/" + id);
                this.websock.onopen = this.websocketonopen;
                this.websock.onerror = this.websocketonerror;
                this.websock.onmessage = this.websocketonmessage;
                this.websock.onclose = this.websocketclose;
            },
            websocketonopen: function () {
                // alert("WebSocket连接成功！");
                console.log("WebSocket连接成功");
            },
            websocketonerror: function (e) {
                alert("WebSocket连接发生错误");
                console.log("WebSocket连接发生错误");
            },
            websocketonmessage: function (e) {
                var da = e.data
                console.log(da);
                this.message = da;
                // alert(this.message)

                this.msgData.push({
                    'content': this.message,
                    'fromId': this.fromId,
                    'toId': this.toId
                });
            },
            websocketclose: function (e) {
                console.log("connection closed (" + e.code + ")");
            }

        },

        watch: {
            from(val) {
                this.fromId = this.from;

            },

            to(val) {
                this.toId = this.to;

            },




            tabName(val) {
                if (this.tabName == 'fourth') {
                    // alert(1234567)
                    let msg = {
                        'fromId': this.fromId,
                        'toId': this.toId
                    };
                    this.toMsgFrame(msg);
                } else {
                    // alert(7654321)
                }
            },

            isBeforeMsg(val) {
                    if (this.isBeforeMsg == false && this.tabName == 'fourth') {
                        // alert(999)

                        let msg = {
                            'fromId': this.fromId,
                            'toId': this.toId
                        };

                        this.toMsgFrame(msg);

                    }
            }

            // isBeforeMsg(val) {
            //
            //     alert(this.tabName + "321")
            //     alert(this.isBeforeMsg + "123")
            //     if (this.isBeforeMsg == false && this.tabName == 'fourth') {
            //         alert(999)
            //
            //         let msg = {
            //             'fromId': this.fromId,
            //             'toId': this.toId
            //         };
            //         this.toMsgFrame(msg);
            //
            //     }
            //
            // }


        },


        created() {

            // alert(this.conversationId + 'conversationId')
            // alert(this.from + 'fromId')
            // alert(this.to + 'toId')


            getLikeOrCollectMessage().then(res => {
                console.log(res.data)
                this.likeAndCollectData = res.data
            });

            getCommentAndReply().then(res => {
                console.log(res.data)
                this.commentAndReplyData = res.data;
            });

            getFollow().then(res => {
                this.followData = res.data;
                console.log(res);
            });


            // if (this.tabName == 'fourth') {
            //     alert(567);
            //     this.isBeforeMsg = false;
            //     this.$forceUpdate();
            // }

            getWSLastMessage().then(res => {
                if (res.status == 200) {
                    this.lastMsgData = res.data;
                    // alert(this.lastMsgData.length)
                    console.log(res.data)
                }
            })
        },

        destroyed() {
            this.websocketclose();
        }
    }
</script>

<style scoped>


    .message .list {

        position: relative;
        /*不写高度说明高度自适应，既然高度都无限了根本就不会出现滚动条*/
        height: 400px;
        width: 100%;
        padding-right: 20px;
        border-bottom: solid 1px #f0f0f0;
        border-top: solid 1px #f0f0f0;
        border-radius: 6px;

    }

    .message .msg-input {
        margin-top: 20px;
    }

    .message .send-msg-btn {
        float: right;
        margin-right: 10px;
        margin-top: 20px;
    }


</style>