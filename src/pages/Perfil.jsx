// src/pages/Perfil.jsx
import React from "react";

const Perfil = () => {
  return (
    <div className="dash-page">
      <div className="dash-header card-appear">
        <div>
          <h1>Perfil de Usuario</h1>
          <p>Edita la información básica del responsable de combustible.</p>
        </div>
      </div>

      <div className="profile-grid card-appear">
        {/* FORMULARIO */}
        <div className="profile-form-card">
          <h2 className="profile-section-title">Editar perfil</h2>

          <form className="profile-form">
            <div className="profile-row">
              <div className="profile-field">
                <label>Empresa (solo lectura)</label>
                <input
                  type="text"
                  value="RASY Servicios de Maquinaria"
                  disabled
                />
              </div>
              <div className="profile-field">
                <label>Usuario</label>
                <input type="text" defaultValue="kennedyey" />
              </div>
              <div className="profile-field">
                <label>Correo</label>
                <input
                  type="email"
                  defaultValue="kennedy.espinoza@empresa.com"
                />
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-field">
                <label>Nombre</label>
                <input type="text" defaultValue="Walter Kennedy" />
              </div>
              <div className="profile-field">
                <label>Apellido</label>
                <input type="text" defaultValue="Espinoza Yangali" />
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-field">
                <label>Cargo</label>
                <input type="text" defaultValue="Analista / Gestor de Combustible" />
              </div>
              <div className="profile-field">
                <label>Ubicación</label>
                <input type="text" defaultValue="Lima, Perú" />
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-field full">
                <label>Sobre mí</label>
                <textarea
                  rows={3}
                  defaultValue="Responsable del análisis de consumo de combustible, optimización de costos y soporte al área de operaciones."
                />
              </div>
            </div>

            <button type="button" className="profile-save-btn">
              Guardar cambios
            </button>
          </form>
        </div>

        {/* CARD LATERAL */}
        <aside className="profile-side-card">
          <div className="profile-avatar-circle">
            <span className="profile-avatar-initials">K</span>
          </div>
          <h3 className="profile-name">Walter Kennedy Espinoza</h3>
          <p className="profile-role">Analista de Datos / Gestión Combustible</p>

          <p className="profile-bio">
            Enfocado en el control de consumo de combustible, monitoreo de
            maquinaria pesada y diseño de dashboards para la toma de decisiones
            en tiempo real.
          </p>

          <div className="profile-stats">
            <div>
              <span className="stat-label">Máquinas monitoreadas</span>
              <span className="stat-value">36</span>
            </div>
            <div>
              <span className="stat-label">Galones analizados</span>
              <span className="stat-value">5.18k</span>
            </div>
            <div>
              <span className="stat-label">Alertas resueltas</span>
              <span className="stat-value">24</span>
            </div>
          </div>

          <div className="profile-social">
            <button className="social-btn">in</button>
            <button className="social-btn">@</button>
            <button className="social-btn">🌐</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Perfil;
