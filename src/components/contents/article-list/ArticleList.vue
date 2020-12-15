<template>
    <div class="article-list">
        <ArticleListItem v-for="article in articles" :key="article"  :article="article"></ArticleListItem>
    </div>
</template>

<script>
    import ArticleListItem from "./ArticleListItem";
    import {mapGetters} from 'vuex'
    export default {
        name: "ArticleList",
        computed: {
            ...mapGetters(['getArticles']),
        },
        props:{
            articles: {
                type:Array,
                default() {
                    return [1,2,3,4,5]
                }
            }
        },
        components:{
            ArticleListItem
        }
    }
</script>

<style scoped>
    .article-list {
        margin-top: 30px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 14px 15px #f3f3f3;
    }
</style>