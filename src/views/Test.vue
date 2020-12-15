<template>
    <div class="test">
        hello world
        <div class="msg" :v-model="message"></div>

    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                shopId: '',
                message: ''
        }
        },
        created() { // 页面创建生命周期函数
            this.initWebSocket()
        },
        destroyed: function () { // 离开页面生命周期函数
            this.websocketclose();
        },
        methods: {
            collapse: function(){
                this.isCollapse = !this.isCollapse;
                if (this.isCollapse) {
                    this.iconClass = "cebianlanzhankai";
                } else{
                    this.iconClass = "cebianlanshouhui";
                }
            },
            initWebSocket: function () {
                // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
                this.websock = new WebSocket("ws://localhost:8000/websocket/DPS007");
                this.websock.onopen = this.websocketonopen;
                this.websock.onerror = this.websocketonerror;
                this.websock.onmessage = this.websocketonmessage;
                this.websock.onclose = this.websocketclose;
            },
            websocketonopen: function () {
                alert("WebSocket连接成功");
                console.log("WebSocket连接成功");
            },
            websocketonerror: function (e) {
                alert("WebSocket连接发生错误");
                console.log("WebSocket连接发生错误");
            },
            websocketonmessage: function (e) {
                alert(111);
                var da = e.data
                console.log(da);
                this.message = da;
                alert(this.message)
            },
            websocketclose: function (e) {
                console.log("connection closed (" + e.code + ")");
            }
        }
    }
</script>

<style scoped>

</style>