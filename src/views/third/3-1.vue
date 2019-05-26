<template>
  <div>
    <h2>3-1 axios创建实例</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'axios3_1',
  methods: {
    createIns(){
      // 创建实例
      let instance = axios.create({
        baseURL: 'https://some-domain.com/api/', // 请求地址
        timeout: 1000, // 超时时间
        headers: {'X-Custom-Header': 'foobar'}  // 请求头设置
      })
      console.log(instance)
      /* 
      * 为什么要创建实例
      * 后端请求地址有多个，例如：'https://some-one.com/api/' 和 'https://some-two.com/api/'
      * 而不同的请求地址请求参数与返回数据格式都不同，这时就需要有不同的axios实例进行不同的设置
      * */
    }
  }
}
</script>
