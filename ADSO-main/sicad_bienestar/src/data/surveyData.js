// Respuestas CERRADAS reales del formulario, más las métricas que
// alimentan la gráfica dinámica.
//
// - "closedQuestion": pregunta 7 del formulario ("¿Cómo preferiría
//   recibir una alerta de un aprendiz en riesgo de deserción?").
// - "metrics": construidas a partir de 5 preguntas cerradas reales,
//   llevadas a una escala 0-10 para poder graficarlas:
//     · Frecuencia de consulta (P3): Diariamente=10 · Varias veces por
//       semana=8 · Semanalmente=6 · Ocasionalmente=4 · Solo cuando se
//       presenta un caso=2
//     · Utilidad de la alerta automática (P6): Muy útil=10 · Útil=7 ·
//       Poco útil=3 · No es necesario=0
//     · Importancia del historial de intervención (P9): Sí=10 · No=0
//     · Utilidad de reportes como evidencia (P11): Sí=10 · No=0
//     · Interés en etiquetas de estado predeterminadas (P13): Sí=10 · No=0
//   Si cambian las respuestas, recalcula el valor con esta misma escala.

export const surveyData = {
  "staff-1": {
    closedQuestion: {
      question: "¿Cómo preferiría recibir una alerta de un aprendiz en riesgo de deserción?",
      options: ["Dentro del sistema", "Correo electrónico", "WhatsApp-SMS", "Otro"],
      selected: "Correo electrónico",
    },
    metrics: [
      { label: "Frecuencia de consulta de inasistencias", value: 2 },
      { label: "Utilidad de la alerta automática", value: 10 },
      { label: "Importancia de historial de intervención", value: 0 },
      { label: "Utilidad de reportes como evidencia", value: 10 },
      { label: "Interés en etiquetas de estado predeterminadas", value: 10 },
    ],
  },

  "staff-2": {
    closedQuestion: {
      question: "¿Cómo preferiría recibir una alerta de un aprendiz en riesgo de deserción?",
      options: ["Dentro del sistema", "Correo electrónico", "WhatsApp-SMS", "Otro"],
      selected: "Dentro del sistema",
    },
    metrics: [
      { label: "Frecuencia de consulta de inasistencias", value: 2 },
      { label: "Utilidad de la alerta automática", value: 10 },
      { label: "Importancia de historial de intervención", value: 10 },
      { label: "Utilidad de reportes como evidencia", value: 10 },
      { label: "Interés en etiquetas de estado predeterminadas", value: 10 },
    ],
  },

  "staff-3": {
    closedQuestion: {
      question: "¿Cómo preferiría recibir una alerta de un aprendiz en riesgo de deserción?",
      options: ["Dentro del sistema", "Correo electrónico", "WhatsApp-SMS", "Otro"],
      selected: "Dentro del sistema",
    },
    metrics: [
      { label: "Frecuencia de consulta de inasistencias", value: 2 },
      { label: "Utilidad de la alerta automática", value: 10 },
      { label: "Importancia de historial de intervención", value: 0 },
      { label: "Utilidad de reportes como evidencia", value: 10 },
      { label: "Interés en etiquetas de estado predeterminadas", value: 10 },
    ],
  },

  "staff-4": {
    closedQuestion: {
      question: "¿Cómo preferiría recibir una alerta de un aprendiz en riesgo de deserción?",
      options: ["Dentro del sistema", "Correo electrónico", "WhatsApp-SMS", "Otro"],
      selected: "Correo electrónico",
    },
    metrics: [
      { label: "Frecuencia de consulta de inasistencias", value: 2 },
      { label: "Utilidad de la alerta automática", value: 0 },
      { label: "Importancia de historial de intervención", value: 10 },
      { label: "Utilidad de reportes como evidencia", value: 0 },
      { label: "Interés en etiquetas de estado predeterminadas", value: 10 },
    ],
  },

  "staff-5": {
    closedQuestion: {
      question: "¿Cómo preferiría recibir una alerta de un aprendiz en riesgo de deserción?",
      options: ["Dentro del sistema", "Correo electrónico", "WhatsApp-SMS", "Otro"],
      selected: "Dentro del sistema",
    },
    metrics: [
      { label: "Frecuencia de consulta de inasistencias", value: 4 },
      { label: "Utilidad de la alerta automática", value: 10 },
      { label: "Importancia de historial de intervención", value: 10 },
      { label: "Utilidad de reportes como evidencia", value: 10 },
      { label: "Interés en etiquetas de estado predeterminadas", value: 10 },
    ],
  },
};
