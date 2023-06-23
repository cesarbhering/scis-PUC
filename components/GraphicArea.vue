<template>
  <div class="full-width">
    <h1 class="title">RELATÓRIOS GERADOS 2023</h1>
    <div class="graphic">
      <img :src="require(`~/static/grafico_relatorios 1.png`)" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.title {
  font-size: large;
  text-align: center;
  font-size: 2rem;
  margin: 0;
  margin-top: 50px;
  padding: 0;
}

.graphic {
  margin: 0 auto;
  width: 60%;
  height: 60%;
  object-fit: cover;
}
</style>
