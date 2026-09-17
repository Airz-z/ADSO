// Funciones puras de apoyo. Mantenerlas separadas de los componentes hace
// que la lógica sea fácil de probar y reutilizar.

/**
 * Extrae los problemas identificados en los pasos del proceso actual de un
 * persona de Bienestar, evitando duplicar esa información manualmente en otro archivo.
 * @param {{steps: {description: string, problem: string}[]}} processEntry
 * @returns {{description: string, problem: string}[]}
 */
export function getProblemsFromProcess(processEntry) {
  if (!processEntry) return [];
  return processEntry.steps
    .filter((step) => Boolean(step.problem))
    .map((step) => ({ description: step.description, problem: step.problem }));
}

/**
 * Da formato a los puntos de una encuesta para el componente de gráfica,
 * recortando etiquetas largas para que no rompan el eje X en pantallas
 * angostas.
 * @param {{label: string, value: number}[]} metrics
 * @param {number} maxLength
 */
export function formatChartData(metrics, maxLength = 18) {
  return metrics.map((metric) => ({
    ...metric,
    shortLabel:
      metric.label.length > maxLength
        ? `${metric.label.slice(0, maxLength - 1)}…`
        : metric.label,
  }));
}

/**
 * Calcula el porcentaje de un valor sobre un total, redondeado a un entero.
 * Útil para reutilizar en cualquier vista que necesite mostrar frecuencias.
 * @param {number} value
 * @param {number} total
 */
export function toPercentage(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}
