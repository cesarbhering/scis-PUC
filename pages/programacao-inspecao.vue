<template>
  <div>
    <el-card class="filters-card">
      <div class="filters-box">
        <div display="flex">
          <div>
            <span class="filter-label">Período</span>
          </div>
          <div>
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="Até"
              start-placeholder="Data Inicial"
              end-placeholder="Data Final"
            >
            </el-date-picker>
          </div>
        </div>
        <div display="flex">
          <span class="filter-label">Equipamento/TAG</span>
          <el-input v-model="equipamento" label="Equipamento/TAG"></el-input>
        </div>
        <div display="flex">
          <div>
            <span class="filter-label">Gênero</span>
          </div>
          <div>
            <el-select label="Gênero" v-model="generoPicked" placeholder="">
              <el-option
                v-for="genero in generos"
                :key="genero.value"
                :label="genero.label"
                :value="genero.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div display="flex">
          <div>
            <span class="filter-label"> Modalidade </span>
          </div>
          <div>
            <el-select
              label="Modalidade"
              v-model="modalidadePicked"
              placeholder=""
            >
              <el-option
                v-for="modalidade in modalidades"
                :key="modalidade.value"
                :label="modalidade.label"
                :value="modalidade.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div display="flex">
          <div>
            <span class="filter-label"> Situação </span>
          </div>
          <div>
            <el-select label="Situação" v-model="situacaoPicked" placeholder="">
              <el-option
                v-for="situacao in situacoes"
                :key="situacao.value"
                :label="situacao.label"
                :value="situacao.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="filters-card">
      <ProgramacaoTable />
    </el-card>
    <div class="buttons-box">
      <el-button type="primary" class="button"
        >Criar Novo</el-button
      >
      <el-button type="primary" class="button">Editar Registro</el-button>
    </div>
  </div>
</template>

<script>
import ProgramacaoTable from '~/components/ProgramacaoTable.vue'

export default {
  components: {
    ProgramacaoTable,
  },

  layout: 'main',

  data() {
    return {
      value1: '',
      equipamento: '',
      generos: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      generoPicked: '',
      modalidades: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      modalidadePicked: '',
      situacoes: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      situacaoPicked: '',
    }
  },
}
</script>

<style>
.filters-card {
  margin: 5px;
}

.filter-label {
  font-style: normal;
  font-weight: 600;
  color: #666666;
}

.filters-box {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
