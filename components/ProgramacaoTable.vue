<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      empty-text="Aguarde..."
      @cell-click="openModal"
    >
      <el-table-column label="Código" width="120">
        <template slot-scope="scope">{{ scope.row.code }}</template>
      </el-table-column>
      <el-table-column property="type" label="Tipo de Inspeção">
      </el-table-column>
      <el-table-column
        property="equipament"
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
    }
  },

  async beforeCreate() {
    await fetch('/.netlify/functions/get_programacoes')
      .then((response) => response.json())
      .then((res) => {
        this.tableData = res
      })
  },

  methods: {
    async fetchData() {
      await fetch('/.netlify/functions/get_programacoes')
        .then((response) => response.json())
        .then((res) => {
          this.tableData = res
        })
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
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
