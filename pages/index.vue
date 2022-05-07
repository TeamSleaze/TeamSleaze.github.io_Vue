<template>
  <div>
    <p>
      Redirecting...
    </p>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$router.push({path: '/home'});
    }
  }
</script>