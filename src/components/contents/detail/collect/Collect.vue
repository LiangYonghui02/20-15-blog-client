<template>
    <div class="collect">
        <div  class="collect-img">
            <img  v-if="hasCollect" src="~assets/img/navbar/收 藏-填充.png" title="收藏数量" @click="changeCollect" >
            <img  v-else src="~assets/img/navbar/收 藏.png" title="点击收藏" @click="changeCollect">
        </div>
        <span :style="fontColor">
            {{collectCount}}
        </span>

    </div>
</template>

<script>
    import {addCollect,isCollect,getCollectCount} from "../../../../network/article";

    export default {
        name: "Collect",
        data() {
            return {
                hasCollect : false,
                collectCount: 0
            }
        },
        methods: {
            changeCollect() {
                    let data = {
                        'entityId':this.essayId,
                        'entityUserId': this.entityUserId,
                        'entityType': 1,

                    };
                    addCollect(data).then(res => {
                        this.collectCount = res.data.collectCount;
                        this.hasCollect = res.data.collectStatus;
                    });
            },

        },
        computed: {
            fontColor() {
                return this.hasCollect == true ? {'color':'#ffaa50'} : {'color':'#969696'}
            }
        },
        props: {
            essayId: {
                type: Number,
                default: 0,
            },

            entityUserId: {
                type: Number,
                default: null
            }
        },
        created() {
            let data = {
                'entityId':this.essayId,
                'entityUserId': this.entityUserId,
                'entityType': 1,

            };

            getCollectCount(this.essayId).then(res => {
                if (res.status == 200) {
                    this.collectCount = res.data.collectCount;
                }
            })

            isCollect(data).then(res => {
                console.log("------------------333333333333333333333")
                console.log(res)
                res.data.collectStatus == 1 ? this.hasCollect = true : this.hasCollect = false;
            })


        }

    }
</script>

<style scoped>
    .collect {
        position: fixed;
        top: calc(50vh - 120px);
        left:  calc(38vh - 120px);

    }

    .collect-img {
        justify-content: center;
        width: 48px;
        height: 48px;
        box-sizing: border-box;
        padding: 4px;
        font-size: 18px;
        border-radius: 50%;
        box-shadow: 0 2px 10px rgba(0,0,0,.05);
        background-color: #fff;
    }

    .collect img {
        width: 38px;
        height: 38px;
    }

    span {
        display: block;
        margin-top: 10px;
        margin-left: -5px;
        font-size: 14px;
        text-align: center;
    }

</style>