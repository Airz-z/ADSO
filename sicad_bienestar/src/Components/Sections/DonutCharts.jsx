import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// 1. Pregunta 3: ¿Con qué frecuencia consulta información de faltas por inasistencias?
const dataP3 = [
  { name: "Solo cuando se presenta un caso (80%)", value: 4, fill: "#3B82F6" },
  { name: "Ocasionalmente (20%)", value: 1, fill: "#10B981" }
];

// 2. Pregunta 11: Importancia de los reportes como soporte para auditorías / seguimiento
const dataP11 = [
  { name: "Sí, completamente / Soporte relevante (60%)", value: 3, fill: "#10B981" },
  { name: "Sí, pero con formatos estandarizados (20%)", value: 1, fill: "#F59E0B" },
  { name: "No, para esto existen otros formatos (20%)", value: 1, fill: "#EF4444" }
];

// 3. Pregunta 13: ¿Le gustaría tener etiquetas predeterminadas según estado de atención?
const dataP13 = [
  { name: "Sí, completamente a favor (100%)", value: 5, fill: "#0D9488" },
  { name: "No / Innecesario (0%)", value: 0, fill: "#E2E8F0" }
];

export const GraficasTorta = () => {
  return (
    <div style={{ maxWidth: "850px", margin: "0 auto", padding: "10px", fontFamily: "sans-serif" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px", marginBottom: "20px" }}>
        
        {/* Pregunta 3 */}
        <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <span style={{ fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", color: "#2563eb", backgroundColor: "#eff6ff", padding: "4px 8px", borderRadius: "6px" }}>
            Pregunta 3
          </span>
          <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#0f172a", marginTop: "10px", marginBottom: "2px" }}>
            Frecuencia de Consulta de Inasistencias
          </h3>
          <p style={{ fontSize: "11px", color: "#64748b", margin: "0 0 10px 0" }}>
            Periodicidad con la que el personal de Bienestar revisa los casos
          </p>

          <div style={{ width: "100%", height: "220px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={dataP3} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={4} dataKey="value">
                  {dataP3.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "11px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pregunta 11 */}
        <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <span style={{ fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", color: "#059669", backgroundColor: "#ecfdf5", padding: "4px 8px", borderRadius: "6px" }}>
            Pregunta 11
          </span>
          <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#0f172a", marginTop: "10px", marginBottom: "2px" }}>
            Soporte de Evidencia para Auditorías
          </h3>
          <p style={{ fontSize: "11px", color: "#64748b", margin: "0 0 10px 0" }}>
            Utilidad de los reportes en el seguimiento interno
          </p>

          <div style={{ width: "100%", height: "220px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={dataP11} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={4} dataKey="value">
                  {dataP11.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "11px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Pregunta 13 (La única con el 100% unánime) */}
      <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <span style={{ fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", color: "#0d9488", backgroundColor: "#f0fdfa", padding: "4px 8px", borderRadius: "6px" }}>
          Pregunta 13
        </span>
        <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#0f172a", marginTop: "10px", marginBottom: "2px" }}>
          Etiquetas Predeterminadas según Estado de Atención
        </h3>
        <p style={{ fontSize: "11px", color: "#64748b", margin: "0 0 10px 0" }}>
          Aprobación de la activación de protocolo mediante estados de contacto
        </p>

        <div style={{ width: "100%", height: "220px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={dataP13} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={4} dataKey="value">
                {dataP13.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "11px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ textAlign: "center", backgroundColor: "#f8fafc", padding: "8px", borderRadius: "8px", border: "1px solid #f1f5f9", marginTop: "10px" }}>
          <span style={{ fontSize: "12px", fontWeight: "bold", color: "#0d9488" }}>100% de aprobación unánime (5/5 encuestados)</span>
        </div>
      </div>
    </div>
  );
};