import Badge from "../UI/Badge";
import EmptyState from "../UI/EmptyState";
import { PRIORITY_STYLES } from "../../utils/constants";
import "./RequirementsSection.css";

/**
 * Requisitos funcionales de una persona de Bienestar. Se presentan como una lista de
 * fichas (ID + requisito + criterio de aceptación) en vez de la tabla
 * ID/Requisito/Necesidad/Prioridad/Criterios del formato original del
 * taller, por pedido explícito de no usar formato de matriz.
 */
function RequirementsSection({ requirements }) {
  if (!requirements || requirements.length === 0) return <EmptyState />;

  return (
    <ol className="requirements-list">
      {requirements.map((req) => (
        <li key={req.id} className="requirement-item">
          <div className="requirement-heading">
            <span className="requirement-id">{req.id}</span>
            <Badge
              text={PRIORITY_STYLES[req.priority]?.label ?? req.priority}
              color={PRIORITY_STYLES[req.priority]?.color}
            />
          </div>
          <p className="requirement-text">{req.requirement}</p>
          <div className="requirement-meta">
            <span className="requirement-meta-label">Criterio de aceptación</span>
            <p className="requirement-criteria">{req.acceptanceCriteria}</p>
          </div>
          <p className="requirement-need">Atiende: {req.need}</p>
        </li>
      ))}
    </ol>
  );
}

export default RequirementsSection;
