<template>
    <div class="my-footer">
       <div class="footer-container">

           <span class="span1"><b>Find And Feel Yourself</b></span>
           <span class="span2">本网站由<b>042工作室</b>提供技术支持,更多信息扫码关注微信公众号。</span>
           <span class="span3">联系方式：<b>431996434@qq.com</b></span>
           <img src="~assets/img/navbar/logo2.png">
       </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",

    }
</script>

<style scoped>
    .my-footer {
        margin-top: 20px;
        width: 100%;
        height: 200px;
        background-color: #2a2730;
        /*border-top: rgb(250, 236, 216) solid 1px;*/
        /*border-top: #EBEEF5 solid 1px;*/
        box-shadow: 0 -14px 15px #f3f3f3;

    }
    
    .footer-container {
        width: 80%;
        position: relative;
        height: 200px;
        margin: 0 auto;
        /*background-color: #e8d7d7;*/
    }

    img {
        height: 160px;
        /*width: 100px;*/
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -20px;
    }

    span {
        letter-spacing: 2px;
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        font-family: '微软雅黑 Light';
        color: #99979c;
    }

    b {
        color: rgba(246, 168, 50, 0.7);
        display: inline-block;
        padding: 0 6px;
        font-size: 16px;

    }

    .span1 {
        top: 90px;
    }

    .span2 {
        top: 130px;
    }

    .span3 {
        top: 160px;
    }
</style>