<template>
    <div class="my-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item :title="title" name="2">
                <div class="input-container">
                    <el-input
                            type="textarea"
                            :autosize = "{ minRows: 4, maxRows: 8}"
                            :placeholder="'@' + essayWriter"
                            v-model="textarea1">
                    </el-input>
                </div>

                <el-button @click="submitComment" class="send-out" type="success" round>{{btnValue}}</el-button>
            </el-collapse-item>

        </el-collapse>

    </div>


</template>

<script>
    import {addComment} from "../../../../network/comment";

    export default {
        name: "MyCollapse",
        inject:['reload'],
        data() {
            return {
                activeNames: ['1'],
                textarea1: '',
                commentDto: {

                }

            };
        },
        methods: {
            handleChange(val) {

            },
            submitComment() {
                let data = {
                    content: this.textarea1,
                    articleId: this.essayId,
                    toUserId: this.toUserId,
                    parentId: this.fatherComment

                };

                addComment(data).then(res => {
                    console.log(res)
                    this.handleChange();
                    // this.$forceUpdate();
                    this.reload();
                });


            }
        },
        props: {
            title: {
                type: String,
                default: '发表评论'
            },
            btnValue: {
                type: String,
                default: '发表'
            },

            essayId: {
                type:Number,
                default: null
            },
            essayUserId: {
                type:Number,
                default: null
            },
            essayWriter: {
                type:String,
                default() {
                    return '李四'
                }
            },
            fatherComment: {
                type:Number,
                default: null,
            },
            toUserId:{
                type:Number,
                default: null,
            },
            isFirst:{
                type:Boolean,
                default: false,
            }

        },
        created() {

        },

    }
</script>

<style scoped>
    .my-collapse {
        padding: 10px 26px;
    }
    .send-out {
        height: 34px;
        line-height: 9px;
        float: right;
        margin: 6px 6px 6px 0;
    }


    .input-container {
        padding: 2px 2px;
    }




</style>

<style>
    .el-collapse-item__header {
        font-size: 16px !important;
        /*padding-left: 20px;*/
        background-color: #222;
    }

</style>