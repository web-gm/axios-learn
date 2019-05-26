<template>
  <div>
    <h2>3-4 取消请求</h2>
    <button @click="getLongtime()">请求数据</button>
    <button @click="cancelGet()">取消请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "axios3_4",
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
