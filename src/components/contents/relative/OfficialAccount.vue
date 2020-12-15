<template>
    <div class="official-account">
        <img src="~assets/img/common/qrcode_15.jpg">
        <p>扫码关注wx官方公众号</p>
    </div>
</template>

<script>
    export default {
        name: "OfficialAccount"
    }
</script>

<style scoped>
    .official-account {
        width: 60%;
        /*background-color: yellow;*/
        margin: 0 auto;
        margin-top: 20px;
        padding-bottom: 14px;
        box-shadow: 1px 1px 5px #f3f3f3;
        background-color: var(--color-tag-background);
        border-radius: 5px;
    }

    .official-account img{
        height: 100%;
        width: 100%;
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