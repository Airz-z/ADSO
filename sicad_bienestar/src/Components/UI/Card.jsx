import "./Card.css";

/**
 * Contenedor genérico con borde sutil. Deliberadamente simple: cada sección
 * decide su propio layout interno en lugar de forzar una tarjeta idéntica
 * en toda la aplicación.
 */
function Card({ children, className = "", as: Tag = "div" }) {
  return <Tag className={`card ${className}`}>{children}</Tag>;
}

export default Card;
