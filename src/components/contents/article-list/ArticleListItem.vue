<template>
    <div class="article-list-item">
        <div v-if="hasImg" class="has-img">
            <with-img-article-item></with-img-article-item>
        </div>
        <div v-else class="noImg">
            <article-item :data="article"></article-item>
        </div>
    </div>
</template>

<script>
    import WithImgArticleItem from "./WithImgArticleItem";
    import ArticleItem from "./ArticleItem";
    export default {
        name: "ArticleListItem",
        components: {ArticleItem, WithImgArticleItem},
        props: {
            article: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                hasImg: false
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style scoped>
    .article-list-item {
        padding: 15px;
        position: relative;
        display: block;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #f0f0f0;
    }




</style>