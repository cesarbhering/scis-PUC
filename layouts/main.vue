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

.buttons-box {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
}
.button {
  background: #65537c;
  border-radius: 16px;
  border: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
}

.button:hover {
  background: rgb(116, 90, 160);
  filter: contrast(135%);
}
</style>
