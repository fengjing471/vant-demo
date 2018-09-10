import axios from 'axios';
//import qs from 'qs';
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.method="POST";
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post['device_id'] = 'w_1';
axios.defaults.headers.post['device_version'] = '1.0.0';
axios.defaults.headers.post['lng'] = '0';
axios.defaults.headers.post['lat'] = '0';
axios.defaults.baseURL = 'http://192.168.2.253:8000';

//POST传参序列化
/*axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        //config.data = qs.stringify(config.data); //序列化成url串
        config.data = JSON.stringify(config.data);
        console.log(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});*/

/**
 * whb:定义返回拦截器
 */
axios.interceptors.response.use((res) =>{
    let result=res.data;
    //console.log(result); //whb:打印返回结果，调试专用
    //whb:如果data不空且含rsid字段，则视为登陆成功
    if(!!result.data && !!result.data.rsid){
        console.log("login success");
        axios.defaults.headers.post['rsid'] = result.data.rsid;
        axios.defaults.headers.post['user_id'] = result.data.user_id;
        axios.defaults.headers.post['app_id'] = result.data.app_id;
    }
    if(result.error_code==1){
        return Promise.reject(res.data);
    }
    if(result.error_code==551){
        return Promise.reject(res.data);
    }
    return res.data;
}, (error) => {
    //404等问题统一在这里处理
    return Promise.reject(error);
});

/**
 * whb:封装 post 方法
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        //let params=qs.stringify(data);//序列化成url串形式
        let params=JSON.stringify(data);//序列化成url串形式
        console.log(params);
        axios.post(url,params)
            .then(res => {
                resolve(res.data);
            },err => {
                reject(err)
            })
    })
}

/**
 * whb:封装 put 方法
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function put(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(res => {
                resolve(res.data);
            },err => {
                reject(err)
            })
    })
}

export default {
    post,put
}