import axios from 'axios';
import qs from 'qs';
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.method="POST";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['device_id'] = 'w_1';
//axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'http://192.168.3.202:8000';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    console.log(res);
    if(!res.data.success){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    //404等问题可以在这里处理
    return Promise.reject(error);
});

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

export function put(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

export default {
    post,put
}