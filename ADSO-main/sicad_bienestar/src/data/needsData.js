// PASO 4 del taller: necesidades identificadas, derivadas de la evidencia
// real recogida en el formulario. "category" agrupa visualmente las
// tarjetas y "priority" acepta: "Alta" | "Media" | "Baja".

export const needsData = {
  "staff-1": [
    {
      need: "Recibir la información de inasistencias a tiempo para activar la ruta de deserción",
      evidence: "\"La información no llega a tiempo para activar la ruta de deserción\"",
      category: "Confiabilidad",
      priority: "Alta",
    },
    {
      need: "Visualizar si el instructor realizó el debido proceso ante las inasistencias",
      evidence: "\"Si el instructor realizó el debido proceso por las inasistencias\"",
      category: "Funcional",
      priority: "Media",
    },
  ],

  "staff-2": [
    {
      need: "Que los instructores reporten los casos de inasistencia de forma oportuna",
      evidence:
        "\"Que los instructores no reporten los casos a tiempo... cuando ya no hay manera de buscar estrategias que retengan a los aprendices\"",
      category: "Confiabilidad",
      priority: "Alta",
    },
    {
      need: "Contar con datos estadísticos del historial de casos para generar reportes",
      evidence: "\"Esta permitiría tener datos estadísticos relevantes para los reportes\"",
      category: "Funcional",
      priority: "Media",
    },
  ],

  "staff-3": [
    {
      need: "Verificar que el instructor active debidamente la ruta de prevención de deserción",
      evidence:
        "\"Es responsabilidad del instructor realizar este proceso y activar debidamente la ruta de Prevención y deserción\"",
      category: "Funcional",
      priority: "Alta",
    },
    {
      need: "Distinguir si el instructor ya inició la ruta o solo notificó la deserción",
      evidence: "\"Solo envían la notificación para reportar la deserción, mas no la prevención\"",
      category: "Confiabilidad",
      priority: "Media",
    },
  ],

  "staff-4": [
    {
      need: "Consultar el tipo y la causa del riesgo conforme al protocolo institucional",
      evidence: "\"Tipo de riesgo, causa del riesgo. Esto está estipulado en el protocolo\"",
      category: "Funcional",
      priority: "Media",
    },
    {
      need: "Delegar en los instructores la identificación oportuna del riesgo, según protocolo",
      evidence: "\"Quienes deben identificar oportunamente a los aprendices son los instructores\"",
      category: "Usabilidad",
      priority: "Baja",
    },
  ],

  "staff-5": [
    {
      need: "Centralizar la información de inasistencias en un solo sistema institucional",
      evidence: "\"La información... puede no estar disponible de manera inmediata o centralizada\"",
      category: "Confiabilidad",
      priority: "Alta",
    },
    {
      need: "Recibir alertas automáticas al acercarse a los límites del Reglamento del Aprendiz",
      evidence:
        "\"Que el sistema permita identificar automáticamente a los aprendices que se acercan a los límites establecidos en el Reglamento\"",
      category: "Funcional",
      priority: "Alta",
    },
  ],
};
