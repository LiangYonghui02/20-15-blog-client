<template>
    <div class="follow-writer">
        <div class="name">
            <ul>
                <li>
                    <a class="avatar"><img :src="userData.avatarUrl"></a>
                    <a :href="/mine/+userData.userId" class="writer-name">{{userData.nickname}}<span style="font-size: 10px; font-weight: 300; padding-left: 10px; color: #969696; ">（{{userData.signature}}）</span></a>
                    <p >【文章数：{{userData.articleCount}}】  |  最近发表《<a :href="/essay/+userData.articleId">{{userData.lastArticleName}}</a>》  |  【简介：{{userData.intro}}】</p>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "FollowWriter",
        data() {
            return {
              isRotate: false
            }
        },
        methods: {
            rotate() {
                this.isRotate = !this.isRotate;
            }
        },

        props: {
            userData: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .follow-writer {
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        box-shadow: 4px 4px 5px #f3f3f3;
        border: none;
        border-radius: 5px;
        padding-bottom: 20px;
        background-color: var(--color-tag-background);
        border-bottom: 1px solid #f0f0f0;
    }



    .follow-writer .avatar {
        float: left;
        width: 58px;
        height: 58px;
        margin-right: 10px;

    }

    .follow-writer .avatar:hover {
        text-decoration: underline;
    }

    .follow-writer .avatar img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: middle;
    }

    .follow-writer .writer-name {
        padding-top: 10px;
        margin-right: 60px;
        color: #222;
        font-size: 16px;
        font-weight: 600;

        display: inline-block;
    }

    .follow-writer .writer-name:hover {
        color: #ffaa50;
    }

    .follow-writer p {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-top: 8px;
        font-size: 12px;
        color: #969696;
    }




</style>