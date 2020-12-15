<template>
    <div class="type-title">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "TypeTitle",
        props: {
            text: {
                type: String,
                default: '收到的赞和收藏'
            }
        }
    }
</script>

<style scoped>
    .type-title {
        margin-left: 20px;
        margin-bottom: 20px;
        font-size: 14px;
        font-weight: 700;
    }
</style>