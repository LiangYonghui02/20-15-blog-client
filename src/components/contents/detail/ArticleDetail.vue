<template>
    <div class="article-detail">
        <div class="article-title">
            <h1><slot name="article-title"></slot></h1>
        </div>
        <!--文章相关的介绍信息-->
        <div class="article-relative">
            <slot name="article-relative"></slot>
        </div>
        <div class="article-content">
            <slot name="article-content"></slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ArticleDetail",

    }
</script>

<style scoped>
    .article-detail {
        margin-top: 20px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 4px 4px 5px #f3f3f3;;
    }

    .article-relative {
        width: 100%;
        margin-bottom: 20px;
    }


</style>