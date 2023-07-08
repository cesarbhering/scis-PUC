<template>
  <el-header class="header-box">
    <h4>Controle das Inspeções de Segurança</h4>
    <el-menu
      mode="horizontal"
      background-color="#65537c"
      text-color="#FFFFFF"
      active-text-color="#FFFFFF"
    >
      <el-submenu index="1">
        <template slot="title">Sistema</template>
        <el-menu-item disabled index="2-1">Cadastro de Usuários</el-menu-item>
        <el-menu-item disabled index="2-2">Alteração de Senha</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">Cadastros</template>
        <el-menu-item disabled index="2-1">Classe de Fluído</el-menu-item>
        <el-menu-item disabled index="2-2">Fluído</el-menu-item>
        <el-menu-item disabled index="2-3">Equipamento</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">Operacional</template>
        <el-menu-item @click="showInspectionScheduler" index="2-1">Programação de Inspeção de Segurança</el-menu-item>
        <el-menu-item disabled index="2-2">Acompanhamento de Inspeção de Segurança</el-menu-item>
        <el-menu-item disabled index="2-3">Controle de Inspeção de Segurança</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">Relatórios</template>
        <el-menu-item disabled index="2-1">Recomendações</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
export default {

methods: {
  showInspectionScheduler() {
    this.$router.push({name: 'programacao-inspecao'})
  }
},

}
</script>

<style>
.header-box {
  display: flex;
  justify-content: space-around;
  background-color: #65537c;
  color: white;
}

.el-submenu__title {
  color: white;
  font-size: large;
  font-weight: 700;
}
</style>
