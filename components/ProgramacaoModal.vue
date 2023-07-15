<template>
  <el-dialog
    id="programacao-modal"
    class="programacao-modal"
    append-to-body
    title="Programação de Inspeção"
    width="50%"
    :before-close="handleClose"
    visible
    @open="openModal"
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
    <div slot="footer" class="buttons-box">
      <el-button class="button" type="primary" @click="handleClose"
        >Cancelar</el-button
      >
      <el-button class="button" type="primary" @click="updateProgramacao"
        >Salvar</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    selectedRow: {
      type: Object,
      default: () => {},
      required: false,
    },
  },

  data() {
    return {
      form: {
        code: '',
        type: '',
        equipament: '',
        category: '',
        schedule: '',
      },
    }
  },

  mounted() {
    this.openModal()
  },

  methods: {
    openModal() {
      this.form = structuredClone(this.selectedRow)
    },

    handleClose() {
      this.$confirm('Tem certeza que deseja cancelar?').then((_) => {
        this.$emit('close')
      })
    },

    async updateProgramacao() {
      const newProgramacao = structuredClone(this.form)
      await fetch('/.netlify/functions/patch_programacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProgramacao),
      }).then((response) => (this.tableData = response))
    },
  },
}
</script>

<style scoped>
</style>
