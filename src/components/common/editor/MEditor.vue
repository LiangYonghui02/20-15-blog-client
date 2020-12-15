<template>
    <div class="markdown">
        <div class="container">
            <my-input ref="titleInput"></my-input>
            <mavon-editor :scrollStyle="true"
                          :codeStyle="code_style"
                          :ishljs="true" v-model="content" ref="md" @imgAdd="$imgAdd" @change="change"
                          style="min-height: 400px; max-height: 500px"/>


            <div class="input-container">
                <el-button class="submit-success" type="warning" @click="submit" round>发表</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import MyInput from "../el-ui/input/MyInput";
    import {publish} from "../../../network/article";

    export default {
        name: "MEditor",
        props: [],
        components: {
            MyInput,
            mavonEditor,
        },
        data() {
            return {
                content: '',
                html: '',
                configs: {},
                text:''
            }
        },
        methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file) {
                // 第一步.将图片上传到服务器.
                let formdata = new FormData();
                formdata.append('image', $file);
                console.log(formdata)
                // axios({
                //     url: 'server url',
                //     method: 'post',
                //     data: formdata,
                //     headers: { 'Content-Type': 'multipart/form-data' },
                // }).then((url) => {
                //     // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                //     /**
                //      * $vm 指为mavonEditor实例，可以通过如下两种方式获取
                //      * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
                //      * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
                //      */
                //     $vm.$img2Url(pos, url);
                // })
            },
            // 所有操作都会被解析重新渲染
            change(value, render) {
                // render 为 markdown 解析后的结果[html]
                this.text = value;
                this.html = render;
            },
            // 提交
            submit() {
                // console.log(this.content);
                console.log(this.html);
                console.log()
                console.log(this.$refs.titleInput.inputValue);
                let data = {
                    'content': this.html,
                    'title': this.$refs.titleInput.inputValue,
                    'text':this.text
                }


                publish(data).then(res => {
                    if (res.status == 200) { // 发表成功
                        alert(res.msg);
                    }
                })

                this.$router.push("/home")

            }
        },
        mounted: function () {
            var t = document.getElementsByTagName("textarea")
            t[0].setAttribute("placeholder", "文字也可以是一种生活方式...");
        }
    }
</script>

<style scoped>

    .input-container {
        width: 100%;
        position: relative;
    }



    .submit-success {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 40px;
        /*margin-left: 200px!important;*/
    }
</style>