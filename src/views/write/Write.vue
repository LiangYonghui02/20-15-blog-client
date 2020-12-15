<template>
    <div class="write">
        <my-nav-bar2></my-nav-bar2>
        <div class="write-area">
            <m-editor></m-editor>
        </div>
        <my-footer class="write-footer"></my-footer>

    </div>
</template>

<script>

    import MyNavBar2 from "../../components/contents/my-navbar/MyNavBar2";
    import MEditor from "../../components/common/editor/MEditor";
    import MyFooter from "../../components/contents/footer/MyFooter";
    export default {
        name: "Write",
        components: {MyFooter, MEditor, MyNavBar2},
    }
</script>

<style scoped>

</style>

<style>
    .write-area {
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
    }

    .write-footer {
        margin-top: 200px !important;
    }
</style>