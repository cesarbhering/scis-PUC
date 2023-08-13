<template>
  <div>
    <el-table
    :loading="loading"
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      empty-text="Aguarde..."
      @cell-click="openModal"
    >
      <el-table-column label="Código" width="120">
        <template slot-scope="scope">{{ scope.row.code }}</template>
      </el-table-column>
      <el-table-column property="modality" label="Tipo de Inspeção">
      </el-table-column>
      <el-table-column
        property="equipament.name"
        label="Equipamento"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        property="category"
        label="Categoria"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        property="schedule"
        label="Data Prevista"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="Operações">
        <el-button size="mini" type="danger">Excluir</el-button>
        <el-button size="mini">Editar</el-button>
      </el-table-column>
    </el-table>
    <ProgramacaoModal
      v-if="showModal"
      :selected-row="selectedRow"
      @close="closeModal"
    />
  </div>
</template>

<script>
import ProgramacaoModal from '~/components/ProgramacaoModal.vue'

export default {
  components: {
    ProgramacaoModal,
  },

  data() {
    return {
      tableData: [],
      selectedRow: {},
      multipleSelection: [],
      showModal: false,
      loading: false
    }
  },

  async beforeMount() {
    await this.fetchData()
  },

  methods: {
    async fetchData() {
      this.loading = true
      await fetch('/.netlify/functions/get_programacoes')
        .then((response) => response.json())
        .then((res) => {
          res.forEach((programacao) => {
            programacao.schedule = new Date(
              programacao.schedule
            ).toLocaleDateString('pt-BR')
          })
          this.tableData = res
        })
      this.loading = false

    },

    handleDelete(info) {
      this.$confirm('Tem certeza que deseja excluir?', 'Atenção', {
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        type: 'warning',
      })
        .then(async () => {
          await fetch('/.netlify/functions/delete_programacao', {
            method: 'DELETE',
            body: JSON.stringify(info),
          }).then(async () => await this.fetchData())
          await this.fetchData()
          this.$message({
            type: 'success',
            message: 'Excluído com sucesso!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Exclusão cancelada!',
          })
        })
    },

    openModal(row, _column, _cell, event) {
      if (event.target.innerText.toLowerCase() === 'excluir') {
        // Perform your custom action here
        return this.handleDelete(row)
      }
      this.selectedRow = structuredClone(row)
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
      this.selectedRow = {}
      this.fetchData()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
