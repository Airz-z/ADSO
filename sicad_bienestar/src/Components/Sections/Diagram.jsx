import React from "react";

export const DiagramaFlujo = () => {
  const steps = [
    {
      title: "Inicio: Inasistencia del Aprendiz",
      badge: "Evento Inicial",
      desc: "El aprendiz falta a la sesión de formación.",
      type: "start"
    },
    {
      title: "Registro de Falta",
      badge: "Proceso",
      desc: "El instructor registra la falta en el sistema o planilla física.",
      type: "process"
    },
    {
      title: "¿Supera el Umbral según Reglamento?",
      badge: "Decisión",
      desc: "Evaluación automática según el Reglamento del Aprendiz (Acuerdo 009 de 2024).",
      type: "decision"
    },
    {
      title: "Alerta Temprana a Bienestar",
      badge: "Notificación",
      desc: "El sistema notifica automáticamente al equipo psicosocial.",
      type: "process"
    },
    {
      title: "Gestión y Etiquetado de Contacto",
      badge: "Intervención",
      desc: "Bienestar asigna etiqueta (Ej: 'Contactado', 'Pendiente respuesta').",
      type: "process"
    },
    {
      title: "Generación de Evidencia / Cierre",
      badge: "Fin del Proceso",
      desc: "Cierre del caso con informe descargable para auditorías.",
      type: "end"
    }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <div style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#1e293b", marginBottom: "4px" }}>
          Diagrama de Flujo del Proceso Actual
        </h2>
        <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "24px" }}>
          Flujo de atención y prevención de la deserción escolar.
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              {/* Bloque del Diagrama */}
              <div
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: step.type === "start" || step.type === "end" ? "50px" : step.type === "decision" ? "12px" : "12px",
                  backgroundColor:
                    step.type === "start" ? "#ecfdf5" :
                    step.type === "end" ? "#f1f5f9" :
                    step.type === "decision" ? "#fffbe1" : "#f8fafc",
                  border:
                    step.type === "start" ? "2px solid #10b981" :
                    step.type === "end" ? "2px solid #64748b" :
                    step.type === "decision" ? "2px solid #f59e0b" : "1px solid #cbd5e1",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold", color: "#0f172a" }}>
                    {step.title}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      backgroundColor: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#475569"
                    }}
                  >
                    {step.badge}
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#475569", margin: 0 }}>{step.desc}</p>

                {/* Sub-opciones de Decisión */}
                {step.type === "decision" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px", paddingTop: "10px", borderTop: "1px stroke #fde68a" }}>
                    <div style={{ backgroundColor: "#ffffff", padding: "8px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "11px" }}>
                      <strong style={{ color: "#ef4444" }}>NO:</strong> Continúa seguimiento normal
                    </div>
                    <div style={{ backgroundColor: "#ffffff", padding: "8px", borderRadius: "8px", border: "1px solid #f59e0b", fontSize: "11px" }}>
                      <strong style={{ color: "#16a34a" }}>SÍ:</strong> Activa ruta de prevención
                    </div>
                  </div>
                )}
              </div>

              {/* Conector / Flecha */}
              {i < steps.length - 1 && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#94a3b8" }}>
                  <span style={{ fontSize: "18px", lineHeight: "1" }}>↓</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};