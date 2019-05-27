<template>
  <div>
    <h2>3-5 取消请求</h2>
    <van-button type="info" @click="getLongtime()">请求数据</van-button>
    <van-button type="danger" @click="cancelGet()">取消请求</van-button>
  </div>
</template>

<script>
import axios from "axios";
import {Button} from 'vant'
export default {
  name: "axios3_5",
  components:{
    [Button.name]:Button
  },
  created() {
    let CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
  },
  methods: {
    getLongtime() {
      let self = this
      // 可以使用同一个 cancel token 取消多个请求
      axios
        .get("http://localhost:9000/api/longtime", {
          cancelToken: self.source.token
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    cancelGet() {
      this.source.cancel('请求取消');
    }
  }
};
</script>
