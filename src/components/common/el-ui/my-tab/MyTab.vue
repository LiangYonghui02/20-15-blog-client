<template>
    <div class="my-tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文章" name="first">文章</el-tab-pane>
            <el-tab-pane label="动态" name="second">动态</el-tab-pane>
            <el-tab-pane label="收藏" name="third">收藏</el-tab-pane>
            <el-tab-pane label="热门" name="fourth">热门</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "MyTab",
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                alert(11)
                console.log(tab, event);
            },
        },
    }
</script>

<style scoped>

</style>