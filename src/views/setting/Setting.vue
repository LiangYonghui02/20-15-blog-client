<template>
    <div class="setting">
        <my-nav-bar2></my-nav-bar2>
        <lay-out class="lay-out">
            <div slot="left-layout" class="left-layout">

                <el-tabs :tab-position="tabPosition" style="min-height: 600px;">

                    <el-tab-pane class="el-tab" label="基础信息">
                        <div class="avatar">
                            <img :src="userData.userInfo.avatarUrl">
                            <el-upload

                                action="https://upload-z2.qiniup.com"
                                accept="image/jpeg,image/gif,image/png,image/bmp"
                                :show-file-list="false"
                                :on-success="handleSuccess"
                                :before-upload="beforeUpload"
                                :data="qn"
                            >
                            <el-button    class="upload" size="small" type="primary">更改头像</el-button>
                        </el-upload>







                        </div>
                        <div class="my-form-item">
                            <span>昵称</span>
                            <input type="text" v-model="userData.userInfo.nickname" >
                        </div>

                        <div class="my-form-item">
                            <span>邮箱</span>
                            {{userData.userInfo.email}}
                        </div>

                        <div class="my-form-item">
                            <span>个性签名</span>
                            <input type="text" v-model="userData.userInfo.signature" >

                        </div>

                        <div class="my-form-item">
                            <span>个人简介</span>
                            {{userData.userInfo.intro}}
                        </div>



                        <el-button type="success" class="to-save" round>保存</el-button>
                    </el-tab-pane>
                    <el-tab-pane class="el-tab" label="个人资料">
                        <div class="my-form-item">
                            <span>个性签名</span>
                            <el-input
                                    type="textarea"
                                    :rows="2" resize="none"
                                    placeholder="个性签名"
                                    v-model="userData.userInfo.signature"
                            >         </el-input>
                        </div>
                        <div class="my-form-item">
                            <span>个人简介</span>
                            <el-input
                                    type="textarea"
                                    :rows="3" resize="none"
                                    placeholder="个人简介"
                                    v-model="userData.userInfo.intro"
                            >
                            </el-input>
                            <el-button type="success" class="to-save" round>保存</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane class="el-tab" label="黑名单">黑名单</el-tab-pane>
                    <el-tab-pane class="el-tab" label="账号管理">账号管理</el-tab-pane>
                </el-tabs>

            </div>
        </lay-out>


    </div>
</template>

<script>
    import MyNavBar2 from "../../components/contents/my-navbar/MyNavBar2";
    import LayOut from "../../components/contents/layout/LayOut";
    import {mapMutations} from 'vuex';


    import {getUserSetting,updateUserUrl} from "../../network/auth";


    export default {
        name: "Setting",
        data() {
            return {
                tabPosition: 'left',
                form: {
                    name: 'Lina'
                },
                userData: {},
                qn: {
                    token: '',
                    key: ''
                },
            }
        },
        methods: {
            ...mapMutations(['setAvatarUrl']),
            //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
            beforeUpload(file) {
                const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isJPG) {
                    return false
                }
                if (!isLt5M) {
                    return false
                }
            },
            handleSuccess(res, file) {
                this.userData.userInfo.avatarUrl = 'http://ql9em9v3u.hn-bkt.clouddn.com/' + res.key;
                let url = 'http://ql9em9v3u.hn-bkt.clouddn.com/' + res.key
                let data = {'url':url};
                updateUserUrl(data).then(res => {
                    if (res.status == 200) {
                        this.setAvatarUrl(url);
                    }
                })

            }




        },
        components: {LayOut, MyNavBar2},

        created() {
            getUserSetting().then(res => {
                this.userData = res.data;
                console.log(res.data)
                this.qn.token = res.data.uploadToken;
                this.qn.key = res.data.fileName;
            });
        }
    }
</script>

<style scoped>

    .setting .lay-out {
        height: 1000px;
    }
    .setting .avatar img {
        width: 100px;
        height: 100px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }

    .setting .el-tab {
        margin-left: 30px;
    }

    .setting .upload {
        position: absolute;
        display: inline-block!important;
        width: 82px;
        opacity: 1;
        border: 1px solid #ffaa50;
        color: #ffaa50!important;
        background-color: rgba(196, 186, 29, 0.05);
        border-radius: 18px;
        top: 32px;
        left: 178px;
    }


    .left-layout {
        padding-top: 40px;
    }

    body {
        background-color: #333;
    }



    .my-form-item {
        border-bottom: 1px solid #f0f0f0;
    }
    .my-form-item span {
        display: inline-block;
        width: 150px;
        font-size: 16px;
        color: #969696;
        padding: 20px 0;
    }

    .my-form-item input {
        padding: 7px 10px;
        font-size: 15px;
        border: 1px solid #c8c8c8;
        border-radius: 5px;
        background-color: hsla(0,0%,71%,.1);
    }

    .to-save {
        width: 100px;
        margin: 30px 0 60px;
        border-radius: 20px;
        border: none;
    }




</style>

<style>
    .setting {
        background-color: #fff;
        /*height: ;*/
    }

    .setting .el-tabs__nav-wrap::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0px !important;
        z-index: 1;
    }




    .setting .el-tabs__item {
        transition: all .1s;
        font-size: 15px;
        width: 200px;
        text-align: center !important;
        border-radius: 5px;
    }

    .setting .el-tabs__item.is-active {
        color: #ffaa50;
        font-weight: 600;
        background-color: #EBEEF5;
    }

    .setting .el-tabs__item:hover {
        color: #ffaa50;
        background-color: #EBEEF5;
    }


    .setting .el-tabs__active-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 6px;
        background-color: #ffaa50;
        z-index: 1;
        transition: transform .3s cubic-bezier(.645, .045, .355, 1);
        list-style: none;
    }

    .setting .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__active-bar.is-right, .el-tabs--right .el-tabs__active-bar.is-left, .el-tabs--right .el-tabs__active-bar.is-right {
        top: 0;
        bottom: auto;
        width: 4px !important;
        height: auto;
    }

    .setting .el-tabs__header {
        padding: 0;
        position: relative;
        margin: 0 10px 15px;
        margin-left: 30px !important;
    }
</style>