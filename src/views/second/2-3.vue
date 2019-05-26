<template>
  <div>
    <h2>2-3 并发请求</h2>
    <van-button type="danger" @click="getAll()">并发请求</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
import axios from 'axios'
export default {
  name: "axios2_3",
  components: {
    [Button.name]: Button
  },
  created(){
  },
  methods: {
    getOne() {
      return axios.get("/data.json");
    },
    getTwo() {
      return axios.get("/city.json");
    },
    getAll() {
      let self = this
      axios.all([self.getOne(), self.getTwo()]).then(
        axios.spread((res1, res2) => {
          console.log(res1);
          console.log(res2);
        })
      );
    }
  }
};
</script>
