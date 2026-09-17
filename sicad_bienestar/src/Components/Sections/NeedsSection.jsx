import Badge from "../UI/Badge";
import EmptyState from "../UI/EmptyState";
import { PRIORITY_STYLES } from "../../utils/constants";
import "./NeedsSection.css";

/**
 * Necesidades identificadas para una persona de Bienestar, agrupadas por categoría.
 * Se agrupan en tiempo de render (no se duplican datos) usando reduce.
 */
function NeedsSection({ needs }) {
  if (!needs || needs.length === 0) return <EmptyState />;

  const groupedByCategory = needs.reduce((groups, need) => {
    const key = need.category;
    groups[key] = groups[key] || [];
    groups[key].push(need);
    return groups;
  }, {});

  return (
    <div className="needs-section">
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="needs-group">
          <h3 className="needs-group-title">{category}</h3>
          <ul className="needs-list">
            {items.map((need) => (
              <li key={need.need} className="needs-item">
                <p className="needs-text">{need.need}</p>
                <p className="needs-evidence">{need.evidence}</p>
                <Badge
                  text={PRIORITY_STYLES[need.priority]?.label ?? need.priority}
                  color={PRIORITY_STYLES[need.priority]?.color}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NeedsSection;
