// src/pages/Reportes.jsx
import React from "react";

const Reportes = () => {
  return (
    <div className="dash-page">
      <div className="dash-header card-appear">
        <div>
          <h1>Reportes</h1>
          <p>Visualización de reportes analíticos y paneles externos.</p>
        </div>
      </div>

      {/* Tarjeta principal de reportes */}
      <div className="dash-card card-appear">
        <div className="dash-card-header">
          <span>Reporte Power BI</span>
          <span className="dash-subtitle">
            Integración del modelo de consumo de combustible
          </span>
        </div>

        <div className="bi-frame-wrapper">
          <p className="dash-info">
            Aquí puedes embeber tu informe de Power BI. Cuando tengas el enlace
            de incrustación, reemplaza el <code>src</code> del <code>iframe</code>.
          </p>

          {/* PLACEHOLDER VISUAL */}
          <div className="bi-frame-placeholder">
            <span>Reporte Power BI (placeholder)</span>
          </div>

          {/* Cuando tengas tu URL de Power BI, descomenta esto y cambia SRC:
          
          <iframe
            title="Reporte Power BI"
            src="AQUÍ_TU_URL_DE_POWER_BI"
            frameBorder="0"
            allowFullScreen
            className="bi-frame"
          ></iframe>
          
          */}
        </div>
      </div>
    </div>
  );
};

export default Reportes;
