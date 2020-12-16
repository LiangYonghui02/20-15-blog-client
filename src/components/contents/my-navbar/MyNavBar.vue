<template>
    <div class="my-nav-bar">
        <nav-bar class="navbar">
            <div slot="left" class="logo-container">
                <a href="/">
                    <img src="~assets/img/common/logo.png" id="logo">
                </a>
            </div>
            <div slot="center" class="center-container">
                <nav-bar-item path="/home">
                    <img slot="item-icon" src="~assets/img/navbar/首页.png" alt="">
                    <img slot="item-icon-active" src="~assets/img/navbar/首页-填充.png" alt="">
                    <div slot="item-text">首页</div>
                </nav-bar-item>
                <nav-bar-item path="/essay/1339204706039320578">
                    <img slot="item-icon" src="~assets/img/navbar/意见.png" alt="">
                    <img slot="item-icon-active" src="~assets/img/navbar/意见-填充.png" alt="">
                    <div slot="item-text">关于本站</div>
                </nav-bar-item>
                <search-input></search-input>
            </div>
            <div slot="right">
                <unlogin-right-nav-bar></unlogin-right-nav-bar>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import NavBarItem from "components/common/navbar/NavBarItem";
    import SearchInput from "components/contents/search/SearchInput";
    import UnloginRightNavBar from "components/contents/my-navbar/unlogin-right-navbar/UnloginRightNavBar";

    export default {
        name: "MyNavBar",
        components: {
            UnloginRightNavBar,
            NavBarItem,
            NavBar,
            SearchInput
        }
    }
</script>

<style scoped>
    .my-nav-bar {
        position: sticky;
        z-index: 99999999999999999999;
        top: 0px;

    }
    .navbar {
        height: 56px;
    }

    #logo {
        height: 46px;
        padding: 5px 0;
        background-color: #fff;
    }

    .logo-container {
        width: 200px;
    }

    .center-container {
        width: 100%;
        margin: 0 auto;
        height: 56px;

    }




</style>