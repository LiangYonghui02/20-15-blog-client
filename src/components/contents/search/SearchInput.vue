<template>
    <div class="search-input left" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
       <input placeholder="请输入搜索内容"  @mousedown="mouseEnter" @keydown="mouseEnter" >
        <a v-if="isActive"><img src="~assets/img/navbar/搜索-填充.png"></a>
        <a v-else ><img src="~assets/img/navbar/搜索.png"></a>
    </div>
</template>

<script>
    export default {
        name: "SearchInput",
        data() {
          return {
              isActive: false,
          }
        },
        methods: {
            mouseEnter() {
                this.isActive = true
            },
            mouseLeave() {
                this.isActive = false
            }
        }
    }
</script>

<style scoped>
    .search-input {
        position: relative;
        width: 234px;
        height: 34px;
        background-color: rgba(236, 236, 236, 0.99);
        border-radius: 40px;
        margin-top: 10px;
        margin-left: 40px;
    }
  .search-input input {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      padding: 0 40px 0 20px;
      width: 160px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      border: 1px solid #eee;
      outline: none;
      border-radius: 40px;
      background: #eee;
      transition: width .5s;
      -moz-transition: width .5s;
      -webkit-transition: width .5s;
      -o-transition: width .5s;
      transition-delay: .1s;
      -moz-transition-delay: .1s;
      -webkit-transition-delay: .1s;
      -o-transition-delay: .1s;
    }

  .search-input img {
      position: absolute;
      right: 10px;
      vertical-align: middle;
      height: 28px;
      width: 28px;
      margin-top: 2px;
      display: inline-block;
  }
</style>