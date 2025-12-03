// src/pages/Ajustes.jsx
import React from "react";

const Ajustes = () => {
  return (
    <div className="dash-page">
      <div className="dash-header card-appear">
        <div>
          <h1>Ajustes</h1>
          
        </div>
      </div>

      <div className="dash-card card-appear">
        <div className="dash-card-header">
          <span>Preferencias generales</span>
        </div>

        <div className="settings-grid">
          <div className="setting-item">
            <label>
              <span>Tema oscuro</span>
              <small>Actualmente activado por defecto.</small>
            </label>
            <button className="setting-btn disabled">Activo</button>
          </div>

          <div className="setting-item">
            <label>
              <span>Refrescar datos automáticamente</span>
              <small>(Solo visual, sin lógica aún)</small>
            </label>
            <button className="setting-btn">Configurar</button>
          </div>

          <div className="setting-item">
            <label>
              <span>Correo para alertas</span>
              <small>Notificaciones sobre consumo anómalo.</small>
            </label>
            <input
              type="email"
              placeholder="operaciones@empresa.com"
              className="setting-input"
            />
          </div>

          <div className="setting-item">
            <label>
              <span>Rango de días por defecto</span>
              <small>Para filtros de fecha en reportes.</small>
            </label>
            <select className="setting-input">
              <option>Últimos 7 días</option>
              <option>Últimos 30 días</option>
              <option>Últimos 90 días</option>
              <option>Todo el año</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajustes;
