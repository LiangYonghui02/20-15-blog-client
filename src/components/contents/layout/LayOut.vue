<template>
    <div class="layout">
        <div class="left-layout">
            <slot name="left-layout"></slot>
        </div>
        <div class="right-layout">
            <slot name="right-layout"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LayOut"
    }
</script>

<style scoped>
    .layout {
        box-sizing: border-box;
        margin: 0 auto;
        width: 60%;
        display: flex;
        /*height: 400px;*/
        /*border: #999999 solid 2px;*/
    }

    .left-layout {
        box-sizing: border-box;
        flex: 8;
        /*background-color: yellow;*/

    }

    .right-layout {
        box-sizing: border-box;
        flex: 2;
        /*background-color: pink;*/
        padding-top: 80px;
    }
</style>