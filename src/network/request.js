import axios from 'axios'
import store from "../store/index";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

export function request(config) {
    const instance = new axios.create({
        //baseURL:'http://123.207.32.32:8000',
        baseURL:'http://localhost:8000',
        timeout:5000
    });
    
    // 请求拦截器
    instance.interceptors.request.use(config => {
        //拦截后需要将拦截下来的请求数据返回发送
        const token = store.state.token;
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    }, err => {
    
    })
    
    // 相应拦截器
    instance.interceptors.response.use(res => {
        // 拦截后需要将拦截下来处理成的结果返回
        // alert(res.status)
        return res.data
    }, err => {
        console.log(err)
        alert(err.msg)
    })
    
    return instance(config)
}