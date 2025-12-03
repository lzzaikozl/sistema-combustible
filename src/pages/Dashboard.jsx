// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { getRegistrosCombustible } from "../services/combustibleService";

const Dashboard = () => {
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await getRegistrosCombustible();
        setRegistros(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error cargando registros:", err);
        setError("No se pudieron cargar los registros de combustible.");
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // KPIs
  const totalRegistros = registros.length;

  const maquinasActivas = new Set(
    registros.map((r) => r.PLACA).filter(Boolean)
  ).size;

  const totalGalones = registros.reduce(
    (acc, r) => acc + (Number(r.GALONES_AUMENTADOS) || 0),
    0
  );

  const fechasSet = new Set(
    registros
      .map((r) => (r.FECHA ? r.FECHA.split("T")[0] : null))
      .filter(Boolean)
  );
  const promedioGalonesDia =
    fechasSet.size > 0 ? totalGalones / fechasSet.size : 0;

  const ultimaFecha =
    registros.length > 0 && registros[0].FECHA
      ? registros[0].FECHA.split("T")[0]
      : "-";

  // Top 5 placas
  const consumoPorPlaca = {};
  registros.forEach((r) => {
    const placa = r.PLACA || "N/D";
    const gal = Number(r.GALONES_AUMENTADOS) || 0;
    consumoPorPlaca[placa] = (consumoPorPlaca[placa] || 0) + gal;
  });

  const topPlacas = Object.entries(consumoPorPlaca)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const maxGalonTop = topPlacas.length
    ? Math.max(...topPlacas.map(([, g]) => g))
    : 0;

  return (
    <div className="dash-page">
      {/* HEADER */}
      <div className="dash-header card-appear">
        <div>
          <h1>Dashboard - Consumo de Combustible</h1>
          <p>
            Monitoreo general de abastecimientos y desempeño de la maquinaria.
          </p>
        </div>
        <div className="dash-header-badge">Versión React dinámica</div>
      </div>

      {/* KPIs */}
      <div className="dash-kpi-row">
        <div className="dash-kpi-card card-appear">
          <div className="dash-kpi-label">Registros totales</div>
          <div className="dash-kpi-value">{totalRegistros}</div>
        </div>
        <div className="dash-kpi-card card-appear">
          <div className="dash-kpi-label">Máquinas activas</div>
          <div className="dash-kpi-value">{maquinasActivas}</div>
        </div>
        <div className="dash-kpi-card card-appear">
          <div className="dash-kpi-label">Total galones (histórico)</div>
          <div className="dash-kpi-value">
            {totalGalones.toFixed(2)}
            <span className="dash-kpi-unit"> gal</span>
          </div>
        </div>
        <div className="dash-kpi-card card-appear">
          <div className="dash-kpi-label">Promedio gal/día</div>
          <div className="dash-kpi-value">
            {promedioGalonesDia.toFixed(2)}
          </div>
        </div>
      </div>

      {/* FILA: top placas + resumen */}
      <div className="dash-charts-row">
        <div className="dash-card card-appear">
          <div className="dash-card-header">
            <span>Top 5 placas por consumo</span>
            <span className="dash-tag">Dinámico</span>
          </div>
          {topPlacas.length === 0 ? (
            <p className="dash-info">No hay datos de consumo disponibles.</p>
          ) : (
            <div className="dash-bar-list">
              {topPlacas.map(([placa, galones]) => {
                const width =
                  maxGalonTop > 0 ? (galones / maxGalonTop) * 100 : 0;
                return (
                  <div className="dash-bar-item" key={placa}>
                    <div className="dash-bar-label">
                      <span>{placa}</span>
                      <span>{galones.toFixed(2)} gal</span>
                    </div>
                    <div className="dash-bar-bg">
                      <div
                        className="dash-bar-fill"
                        style={{ width: `${width}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="dash-card card-appear">
          <div className="dash-card-header">
            <span>Resumen rápido</span>
          </div>
          <ul className="dash-summary-list">
            <li>
              <span>Última fecha registrada</span>
              <strong>{ultimaFecha}</strong>
            </li>
            <li>
              <span>Ejemplo de tipo</span>
              <strong>
                {registros.length > 0 ? registros[0].TIPO || "N/D" : "Sin datos"}
              </strong>
            </li>
            <li>
              <span>Ejemplo de placa</span>
              <strong>
                {registros.length > 0
                  ? registros[0].PLACA || "N/D"
                  : "Sin datos"}
              </strong>
            </li>
            <li>
              <span>Días con registros</span>
              <strong>{fechasSet.size}</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* TABLA */}
      <div className="dash-card dash-table-card card-appear">
        <div className="dash-card-header">
          <span>Últimos movimientos</span>
          <span className="dash-subtitle">
            Vista resumida de los registros de abastecimiento
          </span>
        </div>

        {cargando && <p className="dash-info">Cargando registros...</p>}
        {error && <p className="dash-error">{error}</p>}

        {!cargando && !error && registros.length === 0 && (
          <p className="dash-info">No hay registros para mostrar.</p>
        )}

        {!cargando && !error && registros.length > 0 && (
          <div className="dash-table-wrapper">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Fecha</th>
                  <th>Tipo</th>
                  <th>ID</th>
                  <th>Placa</th>
                  <th>Galones</th>
                </tr>
              </thead>
              <tbody>
                {registros.slice(0, 25).map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.FECHA?.split("T")[0]}</td>
                    <td>{item.TIPO}</td>
                    <td>{item.ID}</td>
                    <td>{item.PLACA}</td>
                    <td>
                      {item.GALONES_AUMENTADOS != null
                        ? Number(item.GALONES_AUMENTADOS).toFixed(2)
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="dash-table-footer">
              Mostrando 25 de {registros.length} registros.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
