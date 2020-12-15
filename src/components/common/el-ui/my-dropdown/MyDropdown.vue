<template>
    <div class="my-dropdown">
        <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="userInfo.avatarUrl">
        </span>
            <el-dropdown-menu class="dropdown-menu" slot="dropdown">
                <el-dropdown-item @click.native="myHome">我的主页</el-dropdown-item>
                <el-dropdown-item @click.native="collectEssay">收藏的文章</el-dropdown-item>
                <el-dropdown-item @click.native="settingClick">设置</el-dropdown-item>
                <el-dropdown-item @click.native="logoutClick">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "MyDropdown",
        inject:['reload'],
        data() {
            return {
                uid: this.userId,

            }
        },
        computed: {
            ...mapGetters(['userId','userInfo'])
        },
        methods: {
            ...mapMutations(['delAll']),
            myHome() {
                this.$router.push("/mine/" + this.userId);
            },
            logoutClick() {
                this.delAll();
                this.$router.push('/home');
                this.reload();

            },
            settingClick() {
                this.$router.replace('/setting/' + this.userId);
            },

            collectEssay() {
                this.$router.replace('/mine/'+this.userId +'?collect')
            }
        }
    }
</script>

<style scoped>
    .my-dropdown {
        display: inline-block;
        z-index: 9999999;

    }


    img {
        height: 38px;
        width: 38px;
        border-radius: 50%;
        margin-top: 10px;
    }

    .dropdown-menu {
        position: fixed;
        z-index: 99999999;
        top: 40px;
        width: 120px;
    }


</style>

<style>

    .el-popper[x-placement^=bottom] {
        margin-top: 22px !important;
        position: sticky;
        top: 100px;
    }


    .el-dropdown-menu, .el-popper, .dropdown-menu {
        position: fixed !important;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #ffaa50 !important;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

    .el-dropdown-menu {
        position: absolute;
        top: 40px !important;
        left: -30px;
        padding: 10px 20px;
        margin: 5px 0;
        background-color: #FFF;
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        color: #ffaa50 !important;
    }


    .el-dropdown-menu__item:hover {
        color: #ffaa50 !important;
        background-color: #EBEEF5 !important;
    }
</style>