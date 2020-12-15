<template>
    <div class="essay">
        <my-nav-bar v-if="!isLogin"></my-nav-bar>
        <my-nav-bar2 v-else></my-nav-bar2>
        <my-article  v-loading="loading" :essayData="essayData"></my-article>
        <my-footer v-if="!loading"></my-footer>
    </div>
</template>

<script>
    import MyArticle from "components/contents/detail/MyArticle";
    import MyFooter from "components/contents/footer/MyFooter";
    import MyNavBar from "../../components/contents/my-navbar/MyNavBar";
    import MyNavBar2 from "../../components/contents/my-navbar/MyNavBar2";
    import {mapGetters, mapMutations} from "vuex";
    import {essay,addRead,isRead,getReadCount} from "../../network/article";
    import {getComments} from "../../network/comment";
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "Essay",
        computed: {
            ...mapGetters(['userOnLine', 'userInfo']),
        },
        data() {
            return {
                isLogin: false,
                essayData: {},
                loading: true,
            }
        },


        methods: {
            ...mapMutations(['setComments']),
        },
        created() {
            this.isLogin =  this.userOnLine;

            essay(this.$route.params.id).then(res => {
                this.essayData = res.data;
                this.loading = false;
                console.log(res);
                let data = {
                    'entityId':this.essayData.article.id,
                    'entityUserId': this.essayData.article.userId,
                    'entityType': 1,
                }
                getReadCount(this.$route.params.id).then(res => {
                    if (res.status == 200) {
                        this.essayData.article.readCount = res.data.readCount;
                    }
                });

                isRead(data).then(res => {
                    if (res.status == 200) {
                        if (res.data.readStatus == 0) {  // 未读
                            addRead(data).then(res => {
                                // alert(res.status)
                                if(res.status == 200) {
                                    // alert(111)
                                    this.essayData.article.readCount = this.essayData.article.readCount + 1;
                                }
                            })
                        }
                    }



                })


            })



            getComments(this.$route.params.id).then(res => {
                console.log('=========getComments========')
                    console.log(res)
                    this.setComments(res.data);


                }
            );






        },

        components: {MyFooter, MyArticle, MyNavBar2, MyNavBar},

        mounted() {

        }


    }
</script>

<style scoped>
    
</style>