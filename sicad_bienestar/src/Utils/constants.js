// Constantes compartidas por varios componentes. Centralizarlas aquí evita
// "magic strings" repetidos y facilita mantener la app escalable.

export const PRIORITY_STYLES = {
  Alta: { color: "#B3261E", label: "Prioridad alta" },
  Media: { color: "#B8860B", label: "Prioridad media" },
  Baja: { color: "#5B6B60", label: "Prioridad baja" },
};

// Cada sección define: identificador de ruta interna, título visible en el
// menú y título largo que aparece como encabezado de la sección.
export const SECTIONS = [
  { id: "proceso", navLabel: "Proceso actual", heading: "Proceso actual" },
  { id: "problemas", navLabel: "Problemas", heading: "Problemas identificados" },
  { id: "graficas", navLabel: "Gráfica dinámica", heading: "Gráfica dinámica de indicadores" },
  { id: "entrevista", navLabel: "Respuestas abiertas", heading: "Respuestas abiertas de la encuesta" },
  { id: "encuesta", navLabel: "Indicadores", heading: "Indicadores cerrados de la encuesta" },
  { id: "necesidades", navLabel: "Necesidades", heading: "Necesidades identificadas" },
  { id: "requisitos", navLabel: "Requisitos", heading: "Requisitos funcionales" },
  { id: "conclusiones", navLabel: "Conclusiones", heading: "Conclusiones" },
];

export const DEFAULT_SECTION_ID = SECTIONS[0].id;
