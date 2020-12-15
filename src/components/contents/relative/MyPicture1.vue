<template>
    <div class="my-picture1">
        <img src="~assets/img/common/滑板.png">

    </div>
</template>

<script>
    export default {
        name: "MyPicture1"
    }
</script>

<style scoped>
    .my-picture1 {
        width: 100%;
        /*background-color: yellow;*/
        margin: 0 auto;
        margin-top: 20px;
        padding-bottom: 14px;
        /*box-shadow: 4px 4px 5px #f3f3f3;*/
        background-color: var(--color-tag-background);
        border-radius: 5px;
    }

    .my-picture1 img{
        height: 100%;
        width: 24%;
        margin: 0 auto;
        text-align: center;
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: 5px;
    }

    p {
        margin-top: 4px;
        font-size: 13px;
        color: #999;
        text-align: center;
    }

</style>