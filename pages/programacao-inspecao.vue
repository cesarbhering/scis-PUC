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
              disabled
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
          <el-input
            disabled
            v-model="equipamento"
            label="Equipamento/TAG"
            placeholder="Procure pela TAG"
          ></el-input>
        </div>
        <div display="flex">
          <div>
            <span class="filter-label">Gênero</span>
          </div>
          <div>
            <el-select
              disabled
              label="Gênero"
              v-model="generoPicked"
              placeholder="Escolha o Gênero..."
            >
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
              v-model="modalidadePicked"
              disabled
              label="Modalidade"
              placeholder="Escolha a Modalidade..."
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
            <el-select
              v-model="situacaoPicked"
              disabled
              label="Situação"
              placeholder="Escolha a situação..."
            >
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
      <el-button
        type="primary"
        class="button"
        @click="showProgramacaoModal = true"
        >Criar Novo</el-button
      >
      <!--       <el-button type="primary" class="button">Editar Registro</el-button> -->
    </div>
    <ProgramacaoModal
      v-if="showProgramacaoModal"
      new-programacao
      @close="showProgramacaoModal = false"
    />
  </div>
</template>

<script>
import ProgramacaoTable from '~/components/ProgramacaoTable.vue'
import ProgramacaoModal from '~/components/ProgramacaoModal.vue'

export default {
  components: {
    ProgramacaoTable,
    ProgramacaoModal,
  },

  layout: 'main',

  data() {
    return {
      showProgramacaoModal: false,
      value1: '',
      equipamento: '',
      generos: [],
      generoPicked: '',
      modalidades: [],
      modalidadePicked: '',
      situacoes: [],
      situacaoPicked: '',
    }
  },
}
</script>

<style scoped>
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
