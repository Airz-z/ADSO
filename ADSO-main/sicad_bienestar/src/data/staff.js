// Personal de Bienestar al Aprendiz que respondió el formulario real
// (ver /mnt/user-data/uploads en el proyecto original — formulario de
// Google Forms "PERSONAL DE BIENESTAR DEL APRENDIZ SENA - Sistema de
// Seguimiento y Control de Asistencias").
//
// EDITA ESTA LISTA si cambian los respondientes. El "id" debe coincidir
// con la llave usada en los demás archivos de /data. El "color" se usa
// en la gráfica dinámica.

export const staffMembers = [
  {
    id: "staff-1",
    name: "Alberto Alfaro",
    role: "Psicólogo",
    email: "ajalfaro@sena.edu.co",
    color: "#39A900",
  },
  {
    id: "staff-2",
    name: "Deysi Johanna Arias Parra",
    role: "Profesional de Deportes",
    email: "darias@sena.edu.co",
    color: "#B8860B",
  },
  {
    id: "staff-3",
    name: "Cindy Maria Latorre de Mota",
    role: "Profesional de Arte y Cultura",
    email: "clatorre@sena.edu.co",
    color: "#3E6FA8",
  },
  {
    id: "staff-4",
    name: "Daniela Giraldo H.",
    role: "Psicóloga",
    email: "dgiraldoh@sena.edu.co",
    color: "#7C5CBF",
  },
  {
    id: "staff-5",
    name: "Daniel Rodríguez",
    role: "Pasante de Bienestar",
    email: "sdvsf271947@gmail.com",
    color: "#1F8A70",
  },
];

export const getStaffById = (id) =>
  staffMembers.find((member) => member.id === id);
