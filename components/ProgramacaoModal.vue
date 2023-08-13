<template>
  <el-dialog
    id="programacao-modal"
    ref="dialog"
    class="programacao-modal"
    append-to-body
    title="Programação de Inspeção"
    width="50%"
    :before-close="handleClose"
    visible
    :close-on-click-modal="false"
    close-on-press-escape
    @open="openModal"
    v-loading="loading"
  >
    <el-form :model="form" :label-position="top">
      <el-row>
        <el-col :span="10">
          <el-form-item v-if="!newProgramacao" label="Código">
            <el-input v-model="form.code" disabled></el-input>
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
          <el-form-item label="Inspeção a realizar">
            <br>
            <el-checkbox-group v-model="form.exams">
              <el-checkbox label="Exame Externo"></el-checkbox>
              <el-checkbox label="Exame Interno"></el-checkbox>
              <el-checkbox label="Teste Hidrostático"></el-checkbox>
              <el-checkbox label="N. D. A."></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col></el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="buttons-box">
      <el-button class="button" type="primary" @click="handleClose"
        >Cancelar</el-button
      >
      <el-button
        class="button"
        type="primary"
        @click="newProgramacao ? createProgramacao() : updateProgramacao()"
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
      default: () => ({
        form: {
          code: '',
          type: '',
          equipament: '',
          category: '',
          schedule: '',
          exams: [],
        },
      }),
      required: false,
    },
    newProgramacao: {
      type: Boolean,
      default: false,
      required: false,
    },
  },

  data() {
    return {
      loading: false,
      form: {
        code: '',
        type: '',
        equipament: '',
        category: '',
        schedule: '',
        exams: [],
      },
    }
  },

  mounted() {
    this.openModal()
  },

  methods: {
    openModal() {
      if (!this.newProgramacao) {
        this.form = structuredClone(this.selectedRow)
      }
    },

    handleClose() {
      this.$confirm('Tem certeza que deseja cancelar?').then((_) => {
        this.$emit('close')
      })
    },

    async updateProgramacao() {
      this.loading = true
      const newProgramacao = structuredClone(this.form)
      await fetch('/.netlify/functions/patch_programacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProgramacao),
      })
        .then(() => {
          this.$emit('close')
        })
        .finally((this.loading = false))
    },

    async createProgramacao() {
      this.loading = true
      const newProgramacao = structuredClone(this.form)
      await fetch('/.netlify/functions/post_programacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProgramacao),
      })
        .then(() => {
          this.$emit('close')
        })
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Criado com sucesso!',
          })
        })
        .finally((this.loading = false))
    },
  },
}
</script>

<style scoped>
</style>
