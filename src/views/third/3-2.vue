<template>
  <div>
    <h2>3-2 axios实例的相关配置</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "axios3_2",
  methods: {
    createIns() {
      // **创建实例， 修改实例配置
      axios.create({
        // 请求url
        url: "/contactList",

        // 请求方法
        method: "get", // 默认值

        // 请求后端地址
        baseURL: "http://localhost:9000/api/",

        // 请求头设置
        headers: {},

        // URL 参数 
        params: {
          ID: 12345
        },

        // `data` 是作为请求主体被发送的数据
        // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
        data: {
          firstName: "Fred"
        },

        // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
        // 如果请求话费了超过 `timeout` 的时间，请求将被中断
        timeout: 1000,

        // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType: "json", // default

        // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
        validateStatus: function(status) {
          return status >= 200 && status < 300; // default
        }
      });

      // **axios全局默认值
      axios.defaults.baseURL = 'https://api.example.com';
      axios.defaults.timeout = 1000;

      // **配置的优先顺序
      // 使用由库提供的配置的默认值来创建实例
      // 此时超时配置的默认值是 `0`
      let instance = axios.create();
      
      // 覆写库的超时默认值
      // 现在，在超时前，所有请求都会等待 2.5 秒
      instance.defaults.timeout = 2500;

      // 为已知需要花费很长时间的请求覆写超时设置
      instance.get('/contactList', {
        timeout: 5000
      });
    }
  }
};
</script>
