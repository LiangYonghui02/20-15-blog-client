<template>
    <div class="comment">
        <comment-title :comment-count="commentCount"></comment-title>

        <my-collapse
                :commentCount="commentCount"
                :essayId="essayId"
                :essayUserId="essayUserId"
                :essayWriter="essayWriter"
                :to-user-id="toUserId"


        ></my-collapse>


        <comment-item   :essayUserId="essayUserId"  v-for="{comment,subComments}  in getComments" :index="index++" :subComments="subComments" :comment="comment"  :key="comment"></comment-item>

    </div>
</template>

<script>
    import CommentTitle from "./CommentTitle";
    import MyCollapse from "../../../common/el-ui/collapse/MyCollapse";
    import CommentItem from "./CommentItem";
    import { mapGetters, mapMutations } from "vuex";

    export default {
        name: "Comment",
        data() {
            return {
                comments: this.getComments,
                oberver:'张三',
            }
        },
        computed: {
            ...mapGetters(['getComments']),
        },
        components: {
            CommentItem,
            MyCollapse,
            CommentTitle
        },
        methods: {
            test() {
                console.log('==================comments===================')
                console.log(this.getComments)
            }

        },
        props: {
            commentCount: {
              type:Number,
              default: null
            },
            essayId: {
                type:Number,
                default: null
            },
            essayUserId: {
                type:Number,
                default: null
            },
            essayWriter: {
                type:String,
                default: '张三'
            },
            toUserId: {
                type:Number,
                default: null
            }

    },

        created() {
            this.test()
            this.index = 0;
        },

        mounted() {
            this.index = 0;
        }
    }
</script>

<style scoped>
    .comment {
        margin-top: 90px;
        background-color: #fff;
        /*height: 200px;*/
        border-radius: 10px;

        box-shadow: 4px 4px 5px #f3f3f3;;
    }
</style>

