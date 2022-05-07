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
      window.location.href = '/home'
    }
  }
</script>