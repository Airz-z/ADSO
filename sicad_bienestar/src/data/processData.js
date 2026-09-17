// PASO 2 del taller: proceso actual, reconstruido a partir de las
// respuestas reales del formulario a las preguntas 1 (cómo recibe la
// información), 2 (medios/herramientas) y 5 (dificultad para consultarla).
// EDITA los textos si el proceso descrito no refleja con precisión el
// caso de cada persona.

export const processData = {
  "staff-1": {
    processName: "Recepción reactiva de casos por correo",
    summary:
      "Bienestar solo se entera de una inasistencia cuando el instructor decide reportarla por correo. No existe una fuente propia de consulta: la información sobre faltas la maneja únicamente el instructor.",
    actors: [
      { actor: "Instructor", role: "Detecta la inasistencia y decide si la reporta" },
      { actor: "Personal de Bienestar (Psicología)", role: "Recibe el correo y evalúa si activar la ruta" },
    ],
    steps: [
      {
        description: "Recibe la notificación del caso vía correo electrónico",
        time: "Solo cuando se presenta un caso",
        problem: null,
      },
      {
        description: "Intenta consultar el estado de inasistencias del aprendiz",
        time: "No hay un medio propio: la información solo la manejan los instructores",
        problem: "La información no llega a tiempo para activar la ruta de deserción",
      },
    ],
  },

  "staff-2": {
    processName: "Correo centralizado a través de la psicóloga encargada",
    summary:
      "Los instructores envían el reporte de inasistencias por correo directamente a la psicóloga encargada de la ruta de prevención de la deserción. No hay otro canal de acceso a esta información.",
    actors: [
      { actor: "Instructor", role: "Envía el reporte de inasistencias por correo" },
      { actor: "Psicóloga encargada de la ruta", role: "Centraliza y recibe todos los correos" },
      { actor: "Personal de Bienestar (Deportes)", role: "Consulta el caso solo cuando se activa" },
    ],
    steps: [
      {
        description: "El instructor envía un correo a la psicóloga encargada de la ruta de prevención",
        time: "Solo cuando se presenta un caso",
        problem: null,
      },
      {
        description: "Bienestar consulta la información únicamente por ese correo electrónico",
        time: "El único medio es el correo que envíen los instructores",
        problem:
          "Los instructores no reportan los casos a tiempo; algunos lo hacen mucho después, cuando ya no hay manera de buscar estrategias que retengan al aprendiz",
      },
    ],
  },

  "staff-3": {
    processName: "Notificación docente tras activar la ruta",
    summary:
      "Bienestar (Arte y Cultura) no consulta directamente la información de inasistencias: se entera a través de la notificación del instructor, una vez ya activada la ruta de prevención de la deserción, a cargo del componente psicosocial.",
    actors: [
      { actor: "Instructor", role: "Activa la ruta de prevención y notifica al componente psicosocial" },
      { actor: "Componente psicosocial", role: "Gestiona la ruta de prevención de la deserción" },
      { actor: "Personal de Bienestar (Arte y Cultura)", role: "Recibe la notificación ya activada" },
    ],
    steps: [
      {
        description: "Espera la notificación del instructor una vez activada la ruta de prevención",
        time: "Solo cuando se presenta un caso",
        problem: null,
      },
      {
        description: "No consulta la información de inasistencias por cuenta propia",
        time: "—",
        problem:
          "Es responsabilidad del instructor realizar el proceso y activar debidamente la ruta de prevención de la deserción",
      },
    ],
  },

  "staff-4": {
    processName: "Recepción por correo bajo protocolo de CompromISO",
    summary:
      "El área de Psicología recibe los casos por correo electrónico, pero considera que Bienestar no debería tener que verificar directamente las faltas: ese seguimiento está definido en el protocolo institucional de CompromISO.",
    actors: [
      { actor: "Instructor", role: "Identifica oportunamente a los aprendices en riesgo" },
      { actor: "Personal de Bienestar (Psicología)", role: "Aplica el protocolo formal de CompromISO" },
    ],
    steps: [
      {
        description: "Recibe el caso por correo electrónico",
        time: "Solo cuando se presenta un caso",
        problem: null,
      },
      {
        description:
          "Remite el seguimiento al protocolo \"Ruta de Atención para la Prevención a la Deserción\" disponible en CompromISO",
        time: "—",
        problem:
          "Como Bienestar no debería necesitar verificar directamente las faltas; el protocolo ya define quién identifica el riesgo",
      },
    ],
  },

  "staff-5": {
    processName: "Reporte disperso entre instructores y coordinaciones",
    summary:
      "La información llega principalmente a través de instructores y coordinaciones académicas, que reportan novedades de forma manual. También puede consultarse en los sistemas institucionales de gestión académica, pero de forma dispersa.",
    actors: [
      { actor: "Instructor", role: "Reporta novedades de inasistencia" },
      { actor: "Coordinación académica", role: "Reporta novedades y mantiene registros propios" },
      { actor: "Personal de Bienestar (Pasantía)", role: "Consulta registros dispersos y da seguimiento" },
    ],
    steps: [
      {
        description: "Recibe reportes de instructores y coordinaciones sobre novedades de inasistencia",
        time: "Ocasionalmente",
        problem: null,
      },
      {
        description:
          "Consulta los sistemas institucionales de gestión académica y los registros suministrados",
        time: "Ocasionalmente",
        problem:
          "La información no siempre está disponible de forma inmediata o centralizada; a veces hay que esperar reportes o consultar registros distintos",
      },
    ],
  },
};
