import "./Badge.css";

/**
 * Etiqueta pequeña de texto con un color de acento a la izquierda.
 * Se usa para prioridades, categorías y estados en toda la app.
 */
function Badge({ text, color = "#5B6B60" }) {
  return (
    <span className="badge" style={{ "--badge-color": color }}>
      {text}
    </span>
  );
}

export default Badge;
