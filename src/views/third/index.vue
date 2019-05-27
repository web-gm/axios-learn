<template>
  <div>
    <div class="nav">
      <router-link to="/third/1">3-1 创建axios实例</router-link>
      <router-link to="/third/2">3-2 实例的相关配置</router-link>
      <router-link to="/third/3">3-3 拦截器</router-link>
      <router-link to="/third/4">3-4 错误处理</router-link>
      <router-link to="/third/5">3-5 取消请求</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'second',
  components: {
  }
}
</script>
