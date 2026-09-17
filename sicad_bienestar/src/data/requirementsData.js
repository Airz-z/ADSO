// PASO 5 del taller: requisitos funcionales derivados de las necesidades
// reales identificadas por persona. Plantilla sugerida: "El sistema debe
// [acción] + [condición/restricción]". "priority" acepta:
// "Alta" | "Media" | "Baja".

export const requirementsData = {
  "staff-1": [
    {
      id: "RF-01",
      requirement:
        "El sistema debe notificar a Bienestar en tiempo real cuando se registre una inasistencia que cumpla los criterios del Reglamento del Aprendiz 009-2024.",
      need: "Recibir la información de inasistencias a tiempo para activar la ruta de deserción",
      priority: "Alta",
      acceptanceCriteria:
        "Al alcanzar el número de faltas definido, Bienestar recibe la alerta en menos de 24 horas desde el registro.",
    },
    {
      id: "RF-02",
      requirement:
        "El sistema debe indicar si el instructor completó el debido proceso de reporte ante las inasistencias del aprendiz.",
      need: "Visualizar si el instructor realizó el debido proceso ante las inasistencias",
      priority: "Media",
      acceptanceCriteria:
        "La ficha de alerta muestra un estado (completo / pendiente) del proceso realizado por el instructor.",
    },
  ],

  "staff-2": [
    {
      id: "RF-03",
      requirement:
        "El sistema debe registrar la fecha en que el instructor reporta el caso, para medir el tiempo de respuesta frente a la inasistencia.",
      need: "Que los instructores reporten los casos de inasistencia de forma oportuna",
      priority: "Alta",
      acceptanceCriteria:
        "Cada alerta muestra la fecha de la inasistencia y la fecha del reporte, permitiendo calcular el tiempo transcurrido.",
    },
    {
      id: "RF-04",
      requirement: "El sistema debe generar reportes estadísticos de los casos atendidos por Bienestar.",
      need: "Contar con datos estadísticos del historial de casos para generar reportes",
      priority: "Media",
      acceptanceCriteria:
        "Bienestar puede exportar un reporte con el número de casos, su estado y resultado en un rango de fechas.",
    },
  ],

  "staff-3": [
    {
      id: "RF-05",
      requirement:
        "El sistema debe mostrar el estado de activación de la ruta de prevención de deserción por parte del instructor.",
      need: "Verificar que el instructor active debidamente la ruta de prevención de deserción",
      priority: "Alta",
      acceptanceCriteria: "La alerta indica si la ruta fue activada, junto con la fecha y el responsable.",
    },
    {
      id: "RF-06",
      requirement:
        "El sistema debe diferenciar entre una notificación de deserción y una activación real de la ruta de prevención.",
      need: "Distinguir si el instructor ya inició la ruta o solo notificó la deserción",
      priority: "Media",
      acceptanceCriteria: "El sistema distingue visualmente ambos estados con etiquetas distintas.",
    },
  ],

  "staff-4": [
    {
      id: "RF-07",
      requirement:
        "El sistema debe mostrar el tipo y la causa del riesgo de deserción según el protocolo institucional vigente.",
      need: "Consultar el tipo y la causa del riesgo conforme al protocolo institucional",
      priority: "Media",
      acceptanceCriteria:
        "La ficha del aprendiz en riesgo incluye un campo de tipo de riesgo y causa, alineado al protocolo de CompromISO.",
    },
    {
      id: "RF-08",
      requirement:
        "El sistema debe dejar la identificación temprana del riesgo a cargo del instructor, limitando la función de Bienestar a consulta y seguimiento.",
      need: "Delegar en los instructores la identificación oportuna del riesgo, según protocolo",
      priority: "Baja",
      acceptanceCriteria:
        "Bienestar puede consultar los casos identificados por instructores sin necesidad de generarlos manualmente.",
    },
  ],

  "staff-5": [
    {
      id: "RF-09",
      requirement:
        "El sistema debe centralizar en un solo lugar la información de inasistencias proveniente de instructores y coordinaciones académicas.",
      need: "Centralizar la información de inasistencias en un solo sistema institucional",
      priority: "Alta",
      acceptanceCriteria:
        "Bienestar consulta todas las inasistencias reportadas desde una sola vista, sin acceder a sistemas distintos.",
    },
    {
      id: "RF-10",
      requirement:
        "El sistema debe generar alertas automáticas cuando un aprendiz se acerque a los límites de inasistencia establecidos en el Reglamento del Aprendiz.",
      need: "Recibir alertas automáticas al acercarse a los límites del Reglamento del Aprendiz",
      priority: "Alta",
      acceptanceCriteria:
        "El sistema notifica a Bienestar cuando el aprendiz alcanza un porcentaje configurable del límite permitido de faltas.",
    },
  ],
};
