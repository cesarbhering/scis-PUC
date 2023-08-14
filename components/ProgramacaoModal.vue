<template>
  <el-dialog
    id="programacao-modal"
    ref="dialog"
    v-loading="loading"
    class="programacao-modal"
    append-to-body
    title="Programação de Inspeção"
    width="35%"
    top="5vh"
    :before-close="handleClose"
    visible
    :close-on-click-modal="false"
    close-on-press-escape
    @open="openModal"
  >
    <el-form :model="form" label-position="top">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item v-if="!newProgramacao" label="Código">
            <el-input
              v-model="form.code"
              disabled
              class="mini-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="Equipamento">
            <el-select
              v-model="form.equipament"
              placeholder="Selecione o Equipamento..."
              @change="equipamentChange"
            >
              <el-option
                v-for="item in mocks.equipament"
                :key="item.name"
                :label="item.name"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Categoria">
            <el-input
              v-model="form.category"
              disabled
              class="mini-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="Empresa Inspeção">
            <el-select
              v-model="form.contractor"
              placeholder="Selecione a Empreiteira..."
            >
              <el-option
                v-for="item in mocks.contractor"
                :key="item.name"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Inspeção a realizar">
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
            <el-select
              v-model="form.situation"
              placeholder="Situação da Programação ..."
            >
              <el-option
                v-for="item in mocks.situation"
                :key="item.name"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Modalidade">
            <el-select
              v-model="form.modality"
              placeholder="Modalidade da Programação..."
            >
              <el-option
                v-for="item in mocks.modality"
                :key="item.name"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Data Prevista">
            <el-date-picker
              v-model="form.schedule"
              type="date"
              placeholder="Selecione uma data"
            >
            </el-date-picker>
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
          equipament: [],
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
      mocks: {
        equipament: [
          { name: 'Filtro de Circulação 1', category: '1A' },
          { name: 'Filtro de Circulação 2', category: '3P' },
          { name: 'Aquecedor de Licor', category: '2C' },
          { name: 'Trocador de Calor Espiral', category: '4F' },
        ],
        contractor: [
          { name: 'Control Test' },
          { name: 'Technotest' },
          { name: 'ISQ do Brasil' },
        ],
        situation: [{ name: 'Programada' }, { name: 'Realizada' }],
        modality: [
          { name: 'Inspeção Periódica' },
          { name: 'Inspeção Programada' },
        ],
      },
      form: {
        code: '',
        type: '',
        equipament: '',
        category: '',
        schedule: '',
        contractor: '',
        situations: [],
        modalities: '',
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

    equipamentChange(equipament) {
      this.form.category = structuredClone(equipament.category)
      this.form.equipament = structuredClone(equipament.name)
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
      }).finally(() => {
        this.$emit('close')
        this.loading = false
      })
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
          this.$root.$emit('closedByModal')
          this.$message({
            type: 'success',
            message: 'Criado com sucesso!',
          })
        })
        .finally(() => {
          this.$emit('close')
          this.$nextTick(() => {
            this.loading = false
          })
        })
    },
  },
}
</script>

<style scoped>
.mini-input {
  width: 110px;
}
</style>
