<template>
    <div class="nav-bar">
        <div class="left left-width"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right right-width"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar {
        position: sticky;
        top: 0;/*顶部navbar的高度*/
        background-color: #fff;
        box-sizing: border-box;
        display: flex;
        line-height: 56px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
        width: 100%;
        margin: 0 auto;
        padding: 0 80px;
        cursor: pointer;
        z-index: 9;
        /*overflow: hidden;*/
    }

    .left-width, .right-width {
        width: 16%;
    }

    .center {
        flex: 1;
    }
</style>