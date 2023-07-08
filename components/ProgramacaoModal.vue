<template>
  <div>
    <el-dialog
      append-to-body
      title="Programação de Inspeção"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form :model="form" label-width="120px">
        <el-form-item label="Código">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="Tipo">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <el-form-item label="Equipamento">
          <el-input v-model="form.equipament"></el-input>
        </el-form-item>
        <el-form-item label="Categoria">
          <el-input v-model="form.category"></el-input>
        </el-form-item>
        <el-form-item label="Programação">
          <el-input v-model="form.schedule"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancelar</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Salvar</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        code: '',
        type: '',
        equipament: '',
        category: '',
        schedule: '',
      },
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Tem certeza que deseja cancelar?').then((_) => {
        done()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
