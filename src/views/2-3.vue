<template>
  <div class="home">
    
  </div>
</template>

<script>
// 并发请求：同时进行多个请求，并统一处理返回值
import axios from 'axios'
export default {
  name: 'axios2-3',
  created() {
    // axios.all() axios.spread()
    
    axios.all(
        [
            axios.get('/data.json'),
            axios.get('/city.json')
        ]
    ).then(
        axios.spread((dataRes,cityRes)=>{
           console.log(dataRes,cityRes) 
        })
    )
  },
}
</script>
