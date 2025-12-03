<!-- src/views/PruebaAPI.vue -->
<template>
  <div class="container">
    <h1>Prueba API - Registros de Combustible</h1>

    <!-- Estado: cargando -->
    <p v-if="cargando">Cargando registros...</p>

    <!-- Estado: error -->
    <p v-if="error" style="color: red;">{{ error }}</p>

    <!-- Tabla con datos -->
    <table v-if="!cargando && !error && registros.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Máquina</th>
          <th>Fecha</th>
          <th>Galones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in registros" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.maquina }}</td>
          <td>{{ item.fecha }}</td>
          <td>{{ item.galones }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Sin datos -->
    <p v-if="!cargando && !error && !registros.length">
      No hay registros para mostrar.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getRegistrosCombustible } from "@/services/combustibleService";

// estados
const registros = ref([]);
const cargando = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    // 👇 Llamamos a tu servicio (Axios)
    registros.value = await getRegistrosCombustible();
  } catch (err) {
    console.error(err);
    error.value = "No se pudieron cargar los registros de combustible.";
  } finally {
    cargando.value = false;
  }
});
</script>

<style scoped>
.container {
  padding: 20px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
}
th {
  text-align: left;
}
</style>
