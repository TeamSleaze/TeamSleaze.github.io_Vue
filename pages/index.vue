<template>
  <div>
    <NuxtLink to="/home">
      Home
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    middleware: 'home_redirect'
  }
</script>