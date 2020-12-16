<template>
    <div class="message">
        <my-nav-bar2></my-nav-bar2>
        <lay-out>
            <div slot="left-layout" class="left-layout">
                <my-tab2 :tab-name="tabName" :is-before-msg="isBeforeMsg" :from="fromId" :to="toId"  :conversation-id="conId"></my-tab2>
            </div>
            <div slot="right-layout">
                <my-picture2></my-picture2>
                <official-account></official-account>
                <my-picture1></my-picture1>
            </div>
        </lay-out>

    </div>
</template>

<script>
    import MyNavBar2 from "../../components/contents/my-navbar/MyNavBar2";
    import MyTab2 from "../../components/common/el-ui/my-tab/MyTab2";
    import LayOut from "../../components/contents/layout/LayOut";
    import MyPicture1 from "../../components/contents/relative/MyPicture1";
    import MyPicture2 from "../../components/contents/relative/MyPicture2";
    import OfficialAccount from "../../components/contents/relative/OfficialAccount";
    import {mapGetters} from 'vuex';
    export default {
        name: "FMessage",
        components: {OfficialAccount, MyPicture2,MyPicture1, LayOut, MyTab2, MyNavBar2},
        data() {
            return {
                tabName: 'first',
                isBeforeMsg: true,
                conId: '',
                fromId:'',
                toId:''
            }
        },
        computed: {
            ...mapGetters(['userId']),
        },
        beforeRouteEnter (to, from, next) {


            if (from.path.indexOf('mine') != -1) {
                // alert(true)
                //
                // alert(from.params.id)
                // alert("0909090909090909")
                //
                //
                //
                //
                // console.log("0909090909090909");
                //
                //
                // console.log("0909090909090909");

                next(vm => {

                    if (vm.userId != from.params.id) {
                        vm.fromId = from.params.id;
                        vm.toId = vm.userId;
                        vm.tabName = 'fourth';
                        vm.isBeforeMsg = false;

                        // alert(vm.isBeforeMsg)

                        // alert( vm.fromID)
                        // alert( vm.To)
                    }
                    if (vm.userId > from.params.id) {
                        vm.conId = from.params.id + "" + vm.userId;
                    } else {
                        vm.conId = vm.userId + "" + from.params.id;
                    }

                    // alert(vm.conId)

                });

            }

            next();

        },


    }
</script>

<style scoped>
    .left-layout {
        padding-top: 40px;
        /*background-color: yellow;*/
    }
</style>


<style>
    .message {
        background-color: #fff;
    }

    .message .el-tabs__nav-wrap::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0px !important;
        z-index: 1;
    }

    .el-tabs__nav  {
        border-left: none !important;
    }
    .message .el-tabs__item {
        transition: all .1s;
        font-size: 15px;
        width: 150px;
        text-align: center !important;
        border-radius: 5px;
        border-left: none;
    }
    .message .el-tabs__item.is-active {
        color: #ffaa50;
        font-weight: 600;
        background-color: #EBEEF5;
    }

    .message .el-tabs__item:hover {
        color: #ffaa50;
        background-color: #EBEEF5;
    }


    .message .el-tabs__active-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 6px;
        background-color: #ffaa50;
        z-index: 1;
        transition: transform .3s cubic-bezier(.645,.045,.355,1);
        list-style: none;
        width: 4px !important;
    }

    .message .el-tabs--right {
        width: 4px !important;
    }

    .message .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__active-bar.is-right, .el-tabs--right .el-tabs__active-bar.is-left, .el-tabs--right .el-tabs__active-bar.is-right {
        top: 0;
        bottom: auto;
        width: 4px !important;
        height: auto;
    }

    .message .el-tabs__header {
        padding: 0;
        position: relative;
        margin: 0 10px 15px;
        margin-left: 30px !important;
    }
</style>