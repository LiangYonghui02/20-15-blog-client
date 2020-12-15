<template>
    <div class="my-input">
        <el-input  v-model="inputValue" autosize placeholder="请这里输入标题"></el-input>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        data() {
            return {
                inputValue: ''
            }
        }
    }
</script>

<style scoped>
    .my-input {
       margin-bottom: 10px;
    }
</style>

<style>
    input {
        outline: none !important;
        /*border: #ffaa50 solid 1px !important;*/
    }

    .el-input__inner {
        outline: none !important;
    }
</style>