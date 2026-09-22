// src/utils/constants.js

export const PRIORITY_STYLES = {
  Alta: { color: "#B3261E", label: "Prioridad alta" },
  Media: { color: "#B8860B", label: "Prioridad media" },
  Baja: { color: "#5B6B60", label: "Prioridad baja" },
};

export const SECTIONS = [
  { id: "introduccion", heading: "Introducción e Integrantes", navLabel: "Introducción" },
  { id: "diagrama", heading: "Diagrama de Flujo del Proceso", navLabel: "Diagrama de Flujo" },
  { id: "graficas-torta", heading: "Gráficas de Torta Interactivas", navLabel: "Gráficas Dinámicas" },
  { id: "proceso", heading: "Proceso Actual", navLabel: "Proceso actual" },
  { id: "problemas", heading: "Problemas Identificados", navLabel: "Problemas" },
  { id: "graficas", heading: "Gráficas Generales", navLabel: "Gráfica dinámica" },
  { id: "entrevista", heading: "Respuestas Entrevista", navLabel: "Respuestas abiertas" },
  { id: "encuesta", heading: "Resultados Encuesta", navLabel: "Indicadores" },
  { id: "necesidades", heading: "Necesidades Identificadas", navLabel: "Necesidades" },
  { id: "requisitos", heading: "Requisitos Funcionales", navLabel: "Requisitos" },
  { id: "conclusiones", heading: "Conclusiones del Proyecto", navLabel: "Conclusiones" }
];

export const DEFAULT_SECTION_ID = SECTIONS[0].id;