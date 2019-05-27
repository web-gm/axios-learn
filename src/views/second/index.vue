<template>
  <div>
    <div class="nav">
      <router-link to="/second/1">2-1 vue项目搭建</router-link>
      <router-link to="/second/2">2-2 axios请求方法及别名</router-link> 
      <router-link to="/second/3">2-3 并发请求</router-link>
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
