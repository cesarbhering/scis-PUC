<template>
  <el-header class="header-box">
    <h3>Controle das Inspeções de Segurança</h3>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#65537c"
      text-color="#FFFFFF"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">Sistema</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">Cadastros</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">Operacional</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">Relatórios</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
export default {}
</script>

<style>
.header-box {
  display: flex;
  justify-content: space-around;
  background-color: #65537c;
  color: white;
}
</style>
