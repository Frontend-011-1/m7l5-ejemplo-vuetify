<script setup>
import { ref } from 'vue';

const valid = ref(false)
const email = ref('')
const password = ref('')

const showPass = ref(false) // para mostrar y ocultar contraseña

const emailRules = [
  value => !!value || 'El campo es requerido',
  value => /.+@.+\..+/.test(value) || 'El e-mail es inválido' // regexp
]

const passwordRules = [
  value => value.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
]
</script>

<template>
  <div>
    <h1>Formulario de login</h1>

    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field label="Email" required placeholder="juanin@mail.com" clearable :rules="emailRules"
            v-model="email">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Password" required clearable hint="Escribe tu contraseña"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'" :type="showPass ? 'text' : 'password'"
            @click:append="showPass = !showPass" v-model="password" :rules="passwordRules"></v-text-field>
        </v-col>
        <v-col>
          <v-btn type="submit" text="Enviar" block :disabled="!valid">
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<style scoped></style>