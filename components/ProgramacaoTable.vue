<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      empty-text="Aguarde..."
      @selection-change="handleSelectionChange"
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
    handleSelectionChange(val) {
      this.multipleSelection = val
    },

    openModal(row, column, cell, event) {
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
