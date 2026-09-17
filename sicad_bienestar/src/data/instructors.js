// Lista de instructores (stakeholders) entrevistados/encuestados.
// EDITA ESTA LISTA: el "id" debe coincidir con la llave usada en los
// demás archivos de /data (processData, interviewData, surveyData,
// needsData, requirementsData). El "color" se usa en las gráficas.

export const instructors = [
  {
    id: "instructor-1",
    name: "Instructor 1",
    program: "ADSO - Ficha 2795421",
    color: "#39A900",
  },
  {
    id: "instructor-2",
    name: "Instructor 2",
    program: "Contabilidad - Ficha 2801103",
    color: "#B8860B",
  },
  {
    id: "instructor-3",
    name: "Instructor 3",
    program: "Talento Humano - Ficha 2798877",
    color: "#3E6FA8",
  },
];

export const getInstructorById = (id) =>
  instructors.find((instructor) => instructor.id === id);
