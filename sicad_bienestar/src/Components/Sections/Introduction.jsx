import React from "react";

export const IntroduccionIntegrantes = () => {
  const integrantes = [
    { nombre: "Jhon Alejandro Pedraza Tinjaca" },
    { nombre: "Julian Ortiz" },
    { nombre: "Daniel Caleño" },
    { nombre: "Jose Miguel Gonzalez Polo" },
    { nombre: "juancarlos gutierrez gomez" },
    { nombre: "Juan Felipe Moreno Ospina" },
    { nombre: "Diego Galeano" },
    { nombre: "Vinicio Alejandro Correa Reverol" }
  ];

  return (
    <div style={{ maxWidth: "850px", margin: "0 auto", padding: "10px", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Card Banner Principal */}
      <div 
        style={{
          background: "linear-gradient(135deg, #059669 0%, #0d9488 100%)",
          color: "#ffffff",
          padding: "28px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(13, 148, 136, 0.15)",
          marginBottom: "20px"
        }}
      >
        <div style={{ display: "flex", justifyBetween: "space-between", alignItems: "center", marginBottom: "12px", gap: "10px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", tracking: "1px", backgroundColor: "rgba(255, 255, 255, 0.2)", padding: "4px 10px", borderRadius: "20px" }}>
            SENA CME — ADSO
          </span>
          <span style={{ fontSize: "11px", fontFamily: "monospace", backgroundColor: "rgba(0, 0, 0, 0.2)", padding: "4px 10px", borderRadius: "20px" }}>
            Proyecto SICAD
          </span>
        </div>
        <h1 style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 8px 0", lineHeight: "1.3" }}>
          Sistema de Control de Asistencia y Prevención de Deserción
        </h1>
        <p style={{ fontSize: "13px", opacity: 0.9, margin: 0, lineHeight: "1.5" }}>
          Plataforma tecnológica para centralizar, gestionar e identificar de forma oportuna los patrones de inasistencia en la formación profesional.
        </p>
      </div>

      {/* Grid de Datos del Proyecto */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "20px" }}>
        <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
          <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "500", display: "block" }}>Instructor Líder</span>
          <strong style={{ fontSize: "13px", color: "#0f172a", marginTop: "4px", display: "block" }}>Eliu Lisbeth Rivera Osorio</strong>
        </div>
        <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
          <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "500", display: "block" }}>Ficha de Formación</span>
          <strong style={{ fontSize: "13px", color: "#0f172a", marginTop: "4px", display: "block" }}>3533405</strong>
        </div>
        <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}>
          <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "500", display: "block" }}>Centro de Formación</span>
          <strong style={{ fontSize: "13px", color: "#0f172a", marginTop: "4px", display: "block" }}>Materiales y Ensayos (CME)</strong>
        </div>
      </div>

      {/* Tarjeta Integrantes */}
      <div style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px", color: "#64748b", marginTop: 0, marginBottom: "16px" }}>
          Equipo de Desarrollo
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
          {integrantes.map((m, idx) => (
            <div 
              key={idx} 
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                backgroundColor: "#f8fafc",
                borderRadius: "10px",
                border: "1px solid #f1f5f9"
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#1e293b" }}>{m.nombre}</span>
              <span style={{ fontSize: "10px", fontWeight: "600", color: "#047857", backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", padding: "3px 8px", borderRadius: "6px" }}>
                {m.rol}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tarjeta Introducción */}
      <div style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#0f172a", marginTop: 0, marginBottom: "12px" }}>
          Introducción
        </h2>
        <p style={{ fontSize: "13px", color: "#334155", lineHeight: "1.6", margin: "0 0 12px 0", textAlign: "justify" }}>
          En el contexto de la formación del Servicio Nacional de Aprendizaje (SENA), el seguimiento continuo y la gestión adecuada de la asistencia de los aprendices constituyen elementos fundamentales para garantizar la permanencia académica, la calidad del aprendizaje y la prevención oportuna de la deserción.
        </p>
        <p style={{ fontSize: "13px", color: "#334155", lineHeight: "1.6", margin: 0, textAlign: "justify" }}>
          El proyecto <strong>SICAD</strong> automatiza la recepción de reportes entre los instructores y el área de Bienestar al Aprendiz, centralizando las inasistencias y generando trazabilidad mediante indicadores estandarizados de acuerdo con el Reglamento del Aprendiz (Acuerdo 009 de 2024).
        </p>
      </div>

    </div>
  );
};