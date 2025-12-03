const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const app = express();
app.use(cors());
app.use(express.json());

// CONFIGURACIÓN DEFINITIVA SQL SERVER
const config = {
  user: "apiuser",
  password: "Api12345*",
  server: "KENNEDY", // Tu servidor
  database: "BD_ConsumoCombustible",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

// ---- RUTA DE PRUEBA ----
app.get("/api/test", async (req, res) => {
  try {
    let pool = await sql.connect(config);
    res.send("Conectado correctamente a SQL Server ✔");
  } catch (err) {
    console.error("❌ ERROR EN /api/test:", err);
    res.status(500).send("Error al conectar ❌");
  }
});

// ---- RUTA PARA INFORMACION ----
app.get("/api/informacion", async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT * FROM INFORMACION");
    res.json(result.recordset);
  } catch (err) {
    console.error("❌ ERROR EN /api/informacion:", err);
    res.status(500).send("Error al obtener datos ❌");
  }
});

// SERVIDOR
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API funcionando en http://localhost:${PORT}`);
});
