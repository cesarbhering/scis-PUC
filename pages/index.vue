<template>
  <div>
    <el-row
      :style="{
        backgroundImage:
          'url(' + require('~/static/login_background.png') + ')',
        backgroundSize: 'cover',
      }"
    >
      <el-col :gutter="10">
        <el-card class="form-card">
          <el-form :model="form">
            <el-form-item label="">
              <el-input
                v-model="form.username"
                placeholder="Usuário"
              ></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input
                v-model="form.password"
                pasword
                placeholder="Senha"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button class="button" type="primary" @click="submitForm()"
            >Entrar</el-button
          >
        </el-card>
      </el-col>
      <el-col></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',

  layout: 'default',

  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    }
  },

  methods: {
    submitForm() {
      this.$router.push('/home')
    }
  },
}
</script>
<style scopped>
.form-card {
  width: 400px;
  margin: 40vh;
}
.button {
  width: 100%;
  background: rgba(149, 117, 205, 0.56);
  border-radius: 16px;
  border: 0;
}

.button:hover {
  background: rgba(149, 117, 205, 0.56);
  filter: contrast(125%);
}
</style>
