<template>
    <div class="mine">
        <my-nav-bar2></my-nav-bar2>
        <lay-out>
            <div slot="left-layout" class="l-mine">
                <div class="top-mine">
                    <div class="top-left">
                        <img :src="url">
                    </div>
                    <div class="top-right">
                        <div class="top-right-t">
                            <span>{{baseInfo.nickname}}</span>
                        </div>
                        <div class="top-right-b">
                            <ul>
                                <li>
                                    <div class="meta-block">
                                        <a >
                                            <p>{{baseInfo.attention}}</p>
                                            关注
<!--                                            <img src="~assets/img/navbar/右箭头.png">-->
                                        </a>        </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <a >
                                            <p>{{baseInfo.fans}}</p>
                                            粉丝
                                        </a>        </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <a >
                                            <p>{{baseInfo.articleCount}}</p>
                                            文章
                                        </a>        </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>{{baseInfo.words}}</p>
                                        <div>字数</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>{{baseInfo.likeCount}}</p>
                                        <div>收获喜欢</div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>


                    <div class="option-container" v-if="this.$route.params.id != this.userId">
                        <span class="option2 option" @click="follow" v-if="!isFollow"><b>+</b> 关注</span>
                        <span class="option2 option" @click="follow" v-else>取消关注</span>
                        <span class="option1 option" @click="sendFF">发短笺</span>

                    </div>

                </div>
                <div class="buttom-mine">
                    <el-tabs v-model="this.activeName" @tab-click="handleClick">
                        <el-tab-pane label="文章"  name="first">
                            <article-list  :articles="this.getArticles" class="my-article-list"></article-list>
                        </el-tab-pane>
                        <el-tab-pane label="动态" name="second">动态</el-tab-pane>
                        <el-tab-pane v-on:click.native="getCollectArticles"    label="收藏" name="third">
                            <article-list  :articles="this.collectArticles" class="my-article-list"></article-list>
                        </el-tab-pane>
                        <el-tab-pane label="关注的人" name="fourth">
                            <follow-writer v-for="item in userFollowUsersData" :user-data="item" :key="item"></follow-writer>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <div slot="right-layout" class="r-mine">
                <my-picture1></my-picture1>
                <official-account></official-account>
                <my-picture2></my-picture2>
            </div>
        </lay-out>

    </div>
</template>

<script>
    import MyNavBar2 from "../../components/contents/my-navbar/MyNavBar2";
    import LayOut from "../../components/contents/layout/LayOut";
    import MyPicture1 from "../../components/contents/relative/MyPicture1";
    import MyPicture2 from "../../components/contents/relative/MyPicture2";
    import OfficialAccount from "../../components/contents/relative/OfficialAccount";
    import ArticleList from "../../components/contents/article-list/ArticleList";
    import {mineArticle,otherArticle,baseInfo} from "../../network/mine";
    import {mapMutations,mapGetters} from 'vuex'
    import {getEntityUserInfo} from "../../network/auth";
    import {follow,unfollow,hasfollow,getUserCollectArticles,getUserFollowUsers} from "../../network/mine";
    import FollowWriter from "../../components/contents/relative/FollowWriter";


    export default {
        name: "Mine",
        components: {FollowWriter, ArticleList, MyPicture2,OfficialAccount, MyPicture1, LayOut, MyNavBar2},
        data() {
          return {
              baseInfo: {},
              activeName: 'first',
              url: '',
              isFollow: false,
              collectArticles: [],
              userFollowUsersData: [],

          }
        },
        methods: {
            ...mapMutations(['setArticles']),
            getMinePageInfo() {
                console.log("this.$route.params")
                console.log(this.$route.params.id)

                baseInfo(this.$route.params.id).then(res => {
                    if (res.status == 200) {
                        console.log(res)
                        console.log(res.data)
                        this.baseInfo = res.data.statisInfo;
                        this.baseInfo.nickname = res.data.username;


                        this.seeIsFollow();
                    } else {
                        alert(res.msg)
                    }
                });

                // 请求自页的信息
                mineArticle(this.$route.params.id).then(res => {
                    // alert(this.status)
                    console.log("console.log()")
                    console.log(res.data);
                    this.setArticles(res.data)
                });





            },
            // 关注：
            follow() {


                let data = {
                    'entityType':3,
                    'entityId':this.baseInfo.userId
                };
                if (!this.isFollow) {
                    // 还没关注的情况下
                    follow(data).then(res => {
                        if (res.status == 200) {
                            this.isFollow = true;
                        }
                    })
                } else {
                    // 取消关注
                    unfollow(data).then(res => {
                        if (res.status == 200) {
                            this.isFollow = false;
                        }
                    })
                }


            },

            // 查看是否关注
            seeIsFollow() {
                let data = {
                    'entityType':3,
                    'entityId':this.baseInfo.userId
                };
                hasfollow(data).then(res => {
                    console.log(res.data)
                    this.isFollow = res.data.hasFollowed;
                })

            },


            // 发信息
            sendFF() {
                this.$router.push('/message');
            },

            getCollectArticles() {
                getUserCollectArticles(this.$route.params.id).then(res => {
                    console.log("-------------------------------")
                    console.log(res.data)
                    console.log("-------------------------------")
                    this.collectArticles = res.data;
                })

            },

            getFollows() {
              getUserFollowUsers(this.$route.params.id).then(res => {
                  console.log("===============================1=============================");
                  console.log(res.data);
                  this.userFollowUsersData = res.data;
                  console.log("==============================1==============================");
                  // alert(res.status)
              });
            },

            handleClick() {
            }
        },
        computed: {
            ...mapGetters(['getArticles','userId','userInfo']),
        },
        created() {
            this.getMinePageInfo();
            getEntityUserInfo(this.$route.params.id).then(res => {
                this.url = res.data.avatarUrl;
                console.log(this.url)
            });

            this.getCollectArticles();

            this.getFollows();







            if (this.$route.fullPath.indexOf('?collect') != -1) {
                this.activeName = 'third';
                // 获取信息
                this.getCollectArticles();
            }





        },
        watch: {
            '$route' (to, from) {
                if (this.$route.params.id) {
                    this.getMinePageInfo();
                    this.getCollectArticles();
                    this.getFollows();
                }

                getEntityUserInfo(this.$route.params.id).then(res => {
                    this.url = res.data.avatarUrl;
                    console.log(this.url)
                });
            }
        },




    }
</script>

<style scoped>
    .mine {
        background-color: #fff;
    }
    .l-mine {
        background-color: #fff;
        height: 100%;
        min-height: 800px;
        width: 800px;
    }

    .l-mine .top-mine {
        height: 120px;
        background-color: #fff;
    }

    .top-mine .top-left {
        display: inline-block;
        width: 110px;
        height: 100%;
        /*background-color: blueviolet;*/
        position: relative;

    }

    .top-left img {
        width: 78px;
        height: 78px;
        border: 1px solid #ddd;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .r-mine {
        /*background-color: yellowgreen;*/
        height: 100%;
        min-height: 800px;
        width: 240px;
    }

    .top-right {
        overflow: hidden;
        display: inline-block;
        height: 100%;
        flex-direction: row;
    }

    .top-right-t {
        background-color: #fff;
        height: 40%;
        width: 660px;
    }

    .top-right-t span {
        font-size: 21px;
        display: inline-block;
        margin-top: 28px;
        font-weight: 700;
        vertical-align: middle;
        color: #333;
    }

    .top-right-b {
        height: 100%;
        background-color: #fff;
    }

    ul {
        padding-left: 0;
    }
    ol, ul {
        margin-top: 0;
        margin-bottom: 10px;
    }

    li {
        display: inline-block;
        line-height: 20px;
        float: left;
    }

    ul div {
        color: #969696;
        font-size: 12px;
    }

    ul p {
        margin-bottom: -3px;
        font-size: 15px;
        color: #333;
    }

    ul .meta-block {
        font-size: 12px;
        margin: 0 7px 6px 0;
        padding: 0 7px 0 0;
        border-right: 1px solid #f0f0f0;
    }

    ul a {
        color: #969696;
        font-size: 12px;
    }

    ul img {
        display: inline-block;
        vertical-align: middle;
        height: 8px;

    }

    .my-article-list {
        margin-top: -10px;
    }

    .mine .option1 {
        position: relative;
        top: 0;
        left: 0;
        padding: 8px 0;
        width: 90px;
        float: right;
        margin: 23px 0 23px 16px;
        font-size: 15px;
        border: 1px solid rgba(59,194,29,.7);
        color: #42c02e!important;
        border-radius: 40px;
        text-align: center;
    }

    .mine .option {
        position: relative;
        top: -100px;
        left: -238px;
    }

    .mine .option2 {

        padding: 8px 0;
        width: 90px;
        float: right;
        margin: 23px 0 23px 16px;
        font-size: 15px;
        border: 1px solid #ffaa50;
        color: #ffaa50!important;


        border-radius: 40px;
        text-align: center;
    }

    .mine .option1:hover {
        background-color: rgba(59, 194, 29, 0.1);
    }

    .mine .option2:hover {
        background-color: rgba(255, 176, 50, 0.1);
    }




</style>

<style>

    .mine .el-tabs__item.is-active {
        color: #ffaa50 !important;
    }

    .mine .el-tabs__item:hover {
        color: #ffaa50 !important;
    }


    .mine .el-tabs__active-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background-color: #ffaa50;
        z-index: 1;
        transition: transform .3s cubic-bezier(.645,.045,.355,1);
        list-style: none;
    }
    .mine .el-tabs__item {
        height: 32px !important;
        box-sizing: border-box;
        display: inline-block;
        list-style: none;
        position: relative !important;
        padding: 0px 20px !important;
        font-size: 15px !important;
        font-weight: 700 !important;
        color: #969696!important;
        line-height: 25px!important;
        text-align: center !important;
    }
    .mine .el-tabs__nav-wrap::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px !important;
        background-color: #E4E7ED;
        z-index: 1;
    }
</style>