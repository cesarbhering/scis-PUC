<template>
  <div>
    <el-card>
      <div class="date-picker">
        <span>Período</span>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="Até"
          start-placeholder="Data Inicial"
          end-placeholder="Data Final"
        >
        </el-date-picker>
      </div>
      <div>
        <el-input v-model="equipamento" label="Equipamento/TAG"></el-input>
        <el-select label="Gênero" v-model="generoPicked" placeholder="">
          <el-option v-for="genero in generos" :key="genero"></el-option>
        </el-select>
        <el-select label="Modalidade" v-model="modalidadePicked" placeholder="">
          <el-option
            v-for="modalidade in modalidades"
            :key="modalidade"
          ></el-option>
        </el-select>
        <el-select label="Situação" v-model="situacaoPicked" placeholder="">
          <el-option v-for="situacao in situacoes" :key="situacao"></el-option>
        </el-select>
      </div>
    </el-card>
    <el-card></el-card>
    <div class="buttons-box">
      <el-button type="primary" class="button">Criar Novo</el-button>
      <el-button type="primary" class="button">Editar Registro</el-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',

  data() {
    return {
      equipamento: '',
      generos: ['Genero1', 'Genero2'],
      generoPicked: '',
      modalidades: ['Modalidade1', 'MOdalidade2'],
      modalidadePicked: '',
      situacoes: ['Situação1', 'Situação2'],
      situacaoPicked: '',
    }
  },
}
</script>

<style>
.date-picker {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
}

.buttons-box {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
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
