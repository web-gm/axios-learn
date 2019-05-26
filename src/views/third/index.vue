<template>
  <div>
    <div class="nav">
      <router-link to="/third/1">3-1</router-link> |
      <router-link to="/third/2">3-2</router-link> |
      <router-link to="/third/3">3-3</router-link> |
      <router-link to="/third/4">3-4</router-link> |
      <router-link to="/third/5">3-5</router-link> 
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
