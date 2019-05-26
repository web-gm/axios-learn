<template>
  <div>
    <h2>3-4 错误处理</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "axios3_4",
  created(){
    this.createError()
  },
  methods: {
    createError() {
      axios.get("/city1.json",{
        headers:{
          auth:true
        }
      }).catch(function(error) {
        if (error.response) {
          console.log(error.response);
          console.log(error.request);
          console.log("Error", error.message);
          console.log(error.config);
        }
      });
    }
  }
};
</script>
