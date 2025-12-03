// src/App.js
import React, { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Reportes from "./pages/Reportes";
import Ajustes from "./pages/Ajustes";
import Perfil from "./pages/Perfil";

function App() {
  const [page, setPage] = useState("dashboard");

  const navItems = [
    { key: "dashboard", label: "Dashboard", icon: "📊" },
    { key: "reportes", label: "Reportes", icon: "📈" },
    { key: "ajustes", label: "Ajustes", icon: "⚙️" },
    { key: "perfil", label: "Perfil", icon: "👤" },
  ];

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "reportes":
        return <Reportes />;
      case "ajustes":
        return <Ajustes />;
      case "perfil":
        return <Perfil />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">⛽</div>
          <div className="sidebar-brand">
            <span className="brand-title">Fuel Control</span>
            <span className="brand-sub">Gestión Combustible</span>
          </div>
        </div>

        <div className="sidebar-separator" />

        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={
                page === item.key ? "sidebar-link active" : "sidebar-link"
              }
              onClick={() => setPage(item.key)}
            >
              <span className="sidebar-dot" />
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="main-content">{renderPage()}</main>
    </div>
  );
}

export default App;
