<template>
  <el-cointaner>
    <top-bar />
    <el-main class="main-box">
      <Nuxt />
    </el-main>
    <footer-area />
  </el-cointaner>
</template>

<script>
export default {}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}

.main-box {
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: auto;
  background-color: aquamarine;
}
</style>
