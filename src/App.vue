<script setup>
import Navbar from './components/Navbar.vue';

</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
