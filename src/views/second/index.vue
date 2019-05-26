<template>
  <div>
    <div class="nav">
      <router-link to="/second/1">2-1</router-link> |
      <router-link to="/second/2">2-2</router-link> |
      <router-link to="/second/3">2-3</router-link>
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
