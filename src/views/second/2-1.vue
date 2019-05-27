<template>
  <div class="wraper">
    <h2>2-1 vue项目搭建</h2>
    <van-button @click="getData">第一次使用axios</van-button>
  </div>
</template>

<script>
import {Button} from 'vant'
import axios from 'axios'
export default {
  name: 'axios2_1',
  components: {
    [Button.name]: Button
  },
  methods: {
    getData(){
      axios.get('/data.json')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  }
}
</script>
