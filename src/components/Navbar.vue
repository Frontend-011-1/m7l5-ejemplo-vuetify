<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const currentTheme = useTheme()

const theme = ref(currentTheme.global.name.value)

const handleSwitchChange = () => {
  currentTheme.change(theme.value)
}
</script>

<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Aprendiendo Vuetify</v-app-bar-title>

    <!-- switch de tema oscuro/claro -->
    <v-switch class="my-auto" true-value="dark" false-value="light" @update:model-value="handleSwitchChange"
      v-model="theme">
      <template #prepend>
        <v-icon icon="mdi-weather-sunny" color="white" v-if="theme === 'light'"></v-icon>
      </template>
      <template #append>
        <v-icon icon="mdi-weather-night" color="white" v-if="theme === 'dark'"></v-icon>
      </template>
    </v-switch>

    <div>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/cards">Cards</v-btn>
      <v-btn to="/form">Form</v-btn>
    </div>


  </v-app-bar>
</template>

<style scoped></style>