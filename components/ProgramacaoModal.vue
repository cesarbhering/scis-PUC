<template>
  <el-dialog
    id="programacao-modal"
    ref="dialog"
    v-loading="loading"
    class="programacao-modal"
    append-to-body
    title="Programação de Inspeção"
    width="50%"
    top="5vh"
    :before-close="handleClose"
    visible
    :close-on-click-modal="false"
    close-on-press-escape
    @open="openModal"
  >
    <el-form :model="form" :label-position="top">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item v-if="!newProgramacao" label="Código">
            <el-input v-model="form.code" disabled></el-input>
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
          <el-form-item label="Empresa Inspeção">
            <el-input v-model="form.contractor"></el-input>
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
        <el-col :span="12">
          <el-form-item label="Situação">
          <!--   <el-select v-model="form.situations" placeholder="">
              <el-option v-for="(situation, i) in situations" :key="i">{{ situation }}</el-option>
            </el-select> -->
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="Modalidade">
          <!--   <el-select v-model="form.modalities" placeholder="">
              <el-option v-for="(modality, i) in modalities" :key="i">{{ modality }}</el-option>
            </el-select> -->
            <el-input></el-input>

          </el-form-item>
          <el-form-item label="Data Prevista">
            <el-input type="date">
            </el-input>
          </el-form-item>
        </el-col>
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
          contractor: '',
          situations: [],
          modalities: [],
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
        contractor: '',
        situations: [],
        modalities: [],
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
