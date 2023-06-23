<template>
  <el-footer class="footer">
    <div><h3>Josiane Aparecida Teixeira Drumond - Admin</h3></div>
    <div><h3>Último login: {{ lastLogin }}</h3></div>
  </el-footer>
</template>

<script>
export default {
  computed: {
    lastLogin() {
      // Retorn dd/mm/yyyy hh:mm now minus 3 days
      return new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
        .toLocaleString()
        .replace(/\//g, '/')
        .replace(',', '')
    },
  },
}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #65537c;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
</style>
