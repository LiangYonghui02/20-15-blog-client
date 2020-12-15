<template>
    <div class="comment-title">
        <span>评论数量<a>{{commentCount}}</a></span>
    </div>
</template>

<script>
    export default {
        name: "CommentTitle",
        data() {
            return {

            }
        },
        props: {
            commentCount: {
                type: Number,
                default: 12
            }
        }
    }
</script>

<style scoped>
    .comment-title {
        padding-left: 20px;
        padding-top: 6px;
        border-left: #ffaa50 4px solid;
        color: #404040;
        line-height: 28px;
        font-size: 18px;
        letter-spacing: 2px;
    }
    a {
        font-size: 16px;
        color: #333;
        margin-left: 10px;
    }
</style>