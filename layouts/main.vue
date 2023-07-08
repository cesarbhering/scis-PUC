<template>
  <div>
    <top-bar />
    <el-main class="main-box">
      <Nuxt />
    </el-main>
    <footer-area />
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
  font-family: sans-serif;
}

.main-box {
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: auto;
}
</style>
