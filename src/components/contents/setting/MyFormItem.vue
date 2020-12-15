<template>
    <div class="my-form-item">
        <span>{{name}}</span>
        <input type="text" :readonly="isReadonly" v-model="value" >
    </div>
</template>

<script>
    export default {
        name: "MyFormItem",
        props: {
            name: {
                type: String,
                default: '昵称'
            },
            value: {
                type: String,
                default: '李四'
            },
            isReadonly: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .my-form-item {
        border-bottom: 1px solid #f0f0f0;
    }
    .my-form-item span {
        display: inline-block;
        width: 150px;
        font-size: 16px;
        color: #969696;
        padding: 20px 0;
    }

    .my-form-item input {
        padding: 7px 10px;
        font-size: 15px;
        border: 1px solid #c8c8c8;
        border-radius: 5px;
        background-color: hsla(0,0%,71%,.1);
    }

</style>