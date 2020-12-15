<template>
    <div class="introduce-writer">
        <div class="title">
            <span>推荐作者</span>
            <a class="page-change" @click="rotate">
                <img   :class="{go:isRotate , flushImg :!isRotate}" src="~assets/img/navbar/刷新.png">换一批
            </a>
        </div>
        <div class="name">
            <ul>
                <li>
                    <a class="avatar"><img src="~assets/img/common/touxiang.png"></a>
                    <a class="writer-name">毫无IC撒</a>
                    <p title="最近更新《肖申克的救赎》">文章数：1000，最近更新《肖申克的救赎》</p>
                </li>
                <li>
                    <a class="avatar"><img src="~assets/img/common/touxiang.png"></a>
                    <a class="writer-name">毫无IC撒</a>
                    <p title="最近更新《肖申克的救赎》">文章数：1000，最近更新《肖申克的救赎》</p>
                </li>
                <li>
                    <a class="avatar"><img src="~assets/img/common/touxiang.png"></a>
                    <a class="writer-name">毫无IC撒</a>
                    <p title="最近更新《肖申克的救赎》">文章数：1000，最近更新《肖申克的救赎》</p>
                </li>
                <li>
                    <a class="avatar"><img src="~assets/img/common/touxiang.png"></a>
                    <a class="writer-name">毫无IC撒</a>
                    <p title="最近更新《肖申克的救赎》">文章数：1000，最近更新《肖申克的救赎》</p>
                </li>
                <li>
                    <a class="avatar"><img src="~assets/img/common/touxiang.png"></a>
                    <a class="writer-name">毫无IC撒</a>
                    <p title="最近更新《肖申克的救赎》">文章数：1000，最近更新《肖申克的救赎》</p>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "IntroduceWriter",
        data() {
            return {
              isRotate: false
            }
        },
        methods: {
            rotate() {
                this.isRotate = !this.isRotate;
            }
        }
    }
</script>

<style scoped>
    .introduce-writer {
        width: 80%;
        margin: 0 auto;
        padding: 10px;
        box-shadow: 4px 4px 5px #f3f3f3;
        border: none;
        border-radius: 5px;
        padding-bottom: 18px;
        background-color: var(--color-tag-background);
    }
    .introduce-writer .title {
        font-size: 14px;
        padding-top: 2px;
        color: #969696;
        overflow: hidden;

    }



    .page-change {
        display: inline-block;
        font-size: 14px;
        color: #b4b4b4;
        font-style: normal;
        float: right;
        font-weight: 400!important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .page-change:hover  {
        color: #666666;
    }

    .flushImg {
        display: inline-block;
        transition: all .5s ease;
        height: 18px;
        width: 18px;
        vertical-align: top;
        margin-right: 2px;
    }

    .go {
        display: inline-block;
        transition: all .5s ease;
        height: 18px;
        width: 18px;
        transform: rotate(180deg);
        vertical-align: top;
        margin-right: 2px;


    }

    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
    }

    .avatar:hover {
        text-decoration: underline;
    }

    .avatar img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }

    .writer-name {
        padding-top: 5px;
        margin-right: 60px;
        color: #222;
        font-size: 14px;
        display: block;
    }

    .writer-name:hover {
        color: #ffaa50;
    }

    .introduce-writer p {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-top: 8px;
        font-size: 12px;
        color: #969696;
    }

    li {
        margin-top: 25px;
    }
    



</style>