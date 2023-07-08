<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @cell-click="openModal"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="Código" width="120">
        <template slot-scope="scope">{{ scope.row.code }}</template>
      </el-table-column>
      <el-table-column property="type" label="Tipo de Inspeção">
      </el-table-column>
      <el-table-column property="equipament" label="Equipamento" show-overflow-tooltip>
      </el-table-column>
      <el-table-column property="category" label="Categoria" show-overflow-tooltip>
      </el-table-column>
      <el-table-column property="schedule" label="Data Prevista" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >Toggle selection status of second and third rows</el-button
      >
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          code: 4,
          type: "Inspeção Períodica",
          equipament: "Caldeira de Recuperação II",
          category: "3B",
          schedule: "09-06-2024"
        },
        {
          code: 4,
          type: "Inspeção Períodica",
          equipament: "Caldeira de Recuperação II",
          category: "3B",
          schedule: "09-06-2024"
        },
        {
          code: 4,
          type: "Inspeção Períodica",
          equipament: "Caldeira de Recuperação II",
          category: "3B",
          schedule: "09-06-2024"
        },
        {
          code: 4,
          type: "Inspeção Períodica",
          equipament: "Caldeira de Recuperação II",
          category: "3B",
          schedule: "09-06-2024"
        },
        {
          code: 4,
          type: "Inspeção Períodica",
          equipament: "Caldeira de Recuperação II",
          category: "3B",
          schedule: "09-06-2024"
        },
        {
          code: 4,
          type: "Inspeção Períodica",
          equipament: "Caldeira de Recuperação II",
          category: "3B",
          schedule: "09-06-2024"
        }
      ],
      multipleSelection: [],
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },

    openModal (row, column, cell, event) {
      console.log(row, column, cell, event)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
