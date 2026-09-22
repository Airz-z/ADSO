# Taller 10 — Análisis de la información recolectada (Bienestar al Aprendiz, SENA)

Front-end en React + Vite que organiza los resultados del formulario real
aplicado al **personal de Bienestar al Aprendiz**  sobre el Sistema de Seguimiento y Control de Asistencias,
desde la óptica de alertas tempranas y prevención de deserción.

## Cómo ejecutarlo

Requisitos: tener [Node.js](https://nodejs.org/) instalado (incluye `npm`).

```bash
npm install
npm run build
npm run dev
```

Esto abre el proyecto en `http://localhost:5173`. Para generar la versión
de producción:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
  data/            → toda la información editable (una fuente de verdad por tema)
    staff.js               las 5 personas de Bienestar que respondieron el formulario
    processData.js          proceso actual reconstruido (preguntas 1, 2, 3 y 5)
    openAnswersData.js      respuestas abiertas reales (preguntas 4, 8, 10 y 12)
    surveyData.js            pregunta cerrada (P7) + métricas de la gráfica (P3, P6, P9, P11, P13)
    needsData.js              necesidades identificadas, con la cita real como evidencia
    requirementsData.js       requisitos funcionales derivados de cada necesidad
    conclusionsData.js        conclusiones generales (no se filtran por persona)

  utils/            → lógica reutilizable, sin JSX
    constants.js      prioridades, colores, lista de secciones del menú
    calculations.js    cálculos y formateo (problemas derivados, etc.)

  components/
    Layout/           Sidebar (filtro por persona de Bienestar + menú) y Header
    Sections/         una sección por paso del taller
    UI/               piezas pequeñas reutilizables (Badge, Card, EmptyState)

  App.jsx            conecta la persona y la sección activas con los datos
```

## Cómo editar las respuestas

Cada archivo dentro de `src/data/` está organizado **por persona**
(`staff-1` a `staff-5`, usando los mismos `id` definidos en `staff.js`).
Para actualizar una respuesta, edita directamente el texto correspondiente
en ese archivo — no es necesario tocar ningún componente.

Para agregar una persona nueva:
1. Añádela en `src/data/staff.js` (con un `id` nuevo, por ejemplo `staff-6`).
2. Agrega su información en cada archivo de `/data` usando ese mismo `id` como llave.

La aplicación la mostrará automáticamente en el filtro del menú lateral, y
la gráfica dinámica se ajustará sola a sus valores.

## Origen de los datos

Las respuestas provienen del formulario real "PERSONAL DE BIENESTAR DEL
APRENDIZ SENA - Sistema de Seguimiento y Control de Asistencias"
(Ficha 3533405, ADSO), respondido por 5 personas: Psicología (2),
Deportes, Arte y Cultura, y una pasantía de Bienestar. Las preguntas
cerradas de la gráfica (P3, P6, P9, P11, P13) se llevaron a una escala
0–10; el detalle de esa conversión está documentado como comentario en
`surveyData.js`.
