<template>
  <div>
    <NuxtLayout>
      <NuxtLink to="./">Home page</NuxtLink>
    </NuxtLayout>
  </div>
</template>

<script>
  export default {
    middleware: 'authenticated'
  }
</script>