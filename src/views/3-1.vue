<template>
  <div class="home">
    
  </div>
</template>

<script>
// axios实例
// 后端接口地址有多个，并且超时时长不一样
import axios from 'axios'
export default {
  name: 'axios3-1',
  created() {
    let instance = axios.create({
        baseURL:'http://localhost:8080',
        timeout: 1000
    })
    let axios2 = axios.create({
        baseURL:'http://localhost:9090',
        timeout: 5000
    })
    instance.get('/data.json').then(res=>{
        console.log(res)
    })
  },
}
</script>
