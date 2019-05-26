<template>
  <div>
    <h2>3-3 拦截器</h2>
    <button @click="getData()">请求拦截</button>
    <button @click="cancelInterceptores()">取消拦截</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "axios3_3",
  created() {
    // 举例 请求拦截器添加自定义headers
    this.instance = axios.create();
    this.myInterceptor = this.instance.interceptors.request.use(config => {
      // 给所有请求添加自定义header
      config.headers.Authorized = true;
      return config;
    });
  },
  methods: {
    createInterceptors() {
      // 创建实例
      // 添加请求拦截器
      axios.interceptors.request.use(
        function(config) {
          // 在发送请求之前做些什么
          return config;
        },
        function(error) {
          // 对请求错误做些什么
          return Promise.reject(error);
        }
      )

      // 添加响应拦截器
      axios.interceptors.response.use(
        function(response) {
          // 对响应数据做点什么
          return response;
        },
        function(error) {
          // 对响应错误做点什么
          return Promise.reject(error);
        }
      )
    },
    // 获取数据
    getData() {
      this.instance
        .get("/city.json")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 取消拦截
    cancelInterceptores() {
      this.instance.interceptors.request.eject(this.myInterceptor);
    }
  }
};
</script>
