<template>
    <div class="with-img-article">
            <div class="has-img-left">
                <div class="article-title">
                    <a href="#">《西行纪》——世人皆不被定义</a>
                </div>
                <div>
                    <p class="article-intro">
                        每晚21：3鸟命，我命由我不由天，是魔是仙，我自己说了算！”——《哪吒之魔童降世》 强行安排一波...
                    </p>
                </div>

                <a class="article-writer" target="_blank" href="/u/ae4e2e3acd60">晚安宇宙人</a>
                <span>
             <img src="~assets/img/navbar/评论.png" class="comment-count">
            50
           </span>
                <span>
                <img src="~assets/img/navbar/喜欢.png" class="like-count">
                415
            </span>
            </div>
            <div class="has-img-right">
                <img class="one-img"
                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596897132950&di=141287227abe7da4ee02f568a85d598d&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2148318713%2C3960000066%26fm%3D214%26gp%3D0.jpg">

            </div>
    </div>
</template>

<script>
    export default {
        name: "WithImgArticleItem"
    }
</script>

<style scoped>
    .article-title {
        display: block;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 6px;

    }

    .article-title a {
        transition: all .3s;
    }

    .article-title a:hover {
        color: #ffaa50;
    }

    .article-intro {
        display: block;
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }

    .comment-count,
    .like-count {
        width: 12px;
        height: 12px;

    }

    .article-writer {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        transition: all .5s;
        margin-right: 16px;
    }

    .article-writer:hover {
        color: #666666;
    }

    span {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        margin-right: 4px;
    }

    .one-img {
        height: 98px;
        width: 148px;
        border-radius: 6px;
    }


    .has-img-left {
        overflow: hidden;
        display: inline-block;
        width: 70%;
    }

    .has-img-right {
        overflow: hidden;
        display: inline-block;
        position: relative;
        width: 30%;
        /*background-color: greenyellow;*/
        height: 98px;
    }

    .has-img-right img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-52%);
    }
</style>