<template>
    <div class="introduce-read">
        <div class="title">
            <img src="~assets/img/common/推荐.png">推荐阅读
        </div>
        <div class="read-item">
            <a>
                <p>《年轻人，问题出现了，我再告诉你》</p>
                <span>阅读数：<b>1000</b></span>
            </a>
        </div>
        <div class="read-item">
            <a>
                <p>《年轻人，问题出现了，我再告诉你》</p>
                <span>阅读数：<b>1000</b></span>
            </a>
        </div>
        <div class="read-item">
            <a>
                <p>《年轻人，问题出现了，我再告诉你》</p>
                <span>阅读数：<b>1000</b></span>
            </a>
        </div>
        <div class="read-item">
            <a>
                <p>《年轻人，问题出现了，我再告诉你》</p>
                <span>阅读数：<b>1000</b></span>
            </a>
        </div>
        <div class="read-item">
            <a>
                <p>《年轻人，问题出现了，我再告诉你》</p>
                <span>阅读数：<b>1000</b></span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IntroduceRead"
    }
</script>

<style scoped>
    .introduce-read {
        background-color: var(--color-tag-background);
        width: 80%;
        margin: 0 auto;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 4px 4px 5px #f3f3f3;
        margin-top: 20px;
    }
    .read-item {
        margin-bottom: 20px;
    }


    p {
        font-size: 14px;
        color: #555555;
        margin-bottom: 4px;
    }
    span {
        font-size: 12px;
        color: #969696;

    }

    .read-item:hover p {
        color: #ffaa50;
        /*text-decoration: underline;*/
    }

    .title {
        font-size: 16px;
        color: #404040;
        margin-bottom: 18px;
    }

    img {
        height: 24px;
        width: 24px;
        vertical-align: bottom;
        margin-right: 6px;
    }
</style>