// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000", // 👈 OJO: puerto 4000, sin /api al final
});

export default API;
