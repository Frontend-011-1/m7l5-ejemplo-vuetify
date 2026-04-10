<script setup>
const people = [
  {
    nombre: 'Juanin',
    apellido: 'Pérez',
    id: 1
  },
  {
    nombre: 'John',
    apellido: 'Doe',
    id: 2
  },
  {
    nombre: 'Jane',
    apellido: 'Doe',
    id: 3
  }
]
</script>

<template>
  <div>
    <h1>Ejemplo de Cards</h1>
    <v-row>
      <v-col v-for="person in people" :key="person.id" cols="12" md="6" lg="4" xl="3">
        <!-- Método 1 de tarjetas: Con props -->
        <v-card class="h-100" variant="outlined" :title="person.nombre" :subtitle="person.apellido"
          :text="`Mi nombre es ${person.nombre} y mi ID es ${person.id}`">
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4" xl="3">
        <!-- Método 2: con slots -->
        <v-card class="h-100">
          <template #title>Título con Slots</template>
          <template #subtitle>Subtítulo con Slots</template>
          <template #text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi quas dolor distinctio
            vero
            atque.</template>
          <div class="text-center text-body-small opacity-50">
            <p>Usando slots</p>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4" xl="3">
        <!-- Método 3: con componentes -->
        <v-card class="h-100">
          <v-card-title>Usando componentes</v-card-title>
          <v-card-subtitle>
            Subtítulo con componentes
          </v-card-subtitle>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi quas dolor distinctio vero
          </v-card-text>
          <v-card-actions>
            <v-btn prepend-icon="mdi-account">Acción</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>