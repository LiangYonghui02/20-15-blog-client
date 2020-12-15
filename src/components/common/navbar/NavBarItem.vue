<template>
    <div class="nav-bar-item left" @click="itemClick" >
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :style="isStyleActive" class="item-text">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBarItem",
        props: {
            path: {
                type: String,
            },
            activeStyle: {
                type: String,
                default: '#ffaa90'
            }
        },
        data () {
            return {
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path)
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            isStyleActive() {
                return this.isActive ? {color:this.activeStyle} : {}
            }
        }
    }
</script>

<style scoped>

    .nav-bar-item {
        flex: 1;
        text-align: center;
        height: 56px;
        font-size: 16px;
        line-height: 56px;
        color:black;
        width: 130px;
    }

    .nav-bar-item img {
        display: inline-block;
        width: 28px;
        height: 28px;
        vertical-align: middle;
        margin: -4px 4px 0 0;
    }

    .actived {
        color: #ffaa50;
        font-weight: bolder;
    }

    .item-text {
        display: inline-block;
    }

    .item-text:hover {
        transition: all .1s;
        color: #ffaa50;
    }

</style>
