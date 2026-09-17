import "./EmptyState.css";

/**
 * Se muestra cuando una persona nueva aún no tiene información cargada
 * en alguno de los archivos de /data. Evita que la app se rompa o muestre
 * una sección en blanco sin explicación.
 */
function EmptyState({ message = "Todavía no hay información registrada para esta persona." }) {
  return <p className="empty-state">{message}</p>;
}

export default EmptyState;
