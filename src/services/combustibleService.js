// src/services/combustibleService.js
import API from "./api";

export const getRegistrosCombustible = async () => {
  // 👇 aquí llamamos a la ruta que SÍ existe en tu server.js
  const response = await API.get("/api/informacion");

  console.log("Respuesta de /api/informacion:", response.data);
  return response.data; // esto le llega al Dashboard
};
