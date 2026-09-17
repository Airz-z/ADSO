import { staffMembers } from "../../data/staff";
import { SECTIONS } from "../../utils/constants";
import "./Sidebar.css";

/**
 * Panel lateral fijo: actúa como el filtro por persona de Bienestar al
 * Aprendiz (requisito principal del brief) y como tabla de contenido del
 * informe. Al ser una lista de texto con indicador de estado, evita la
 * sensación de "dashboard SaaS" y se lee más como el índice de un
 * documento de análisis.
 */
function Sidebar({ activeStaffId, onStaffChange, activeSectionId, onSectionChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-brand-kicker">Taller 10</span>
        <h1 className="sidebar-brand-title">Bienestar al Aprendiz</h1>
      </div>

      <nav className="sidebar-group" aria-label="Filtro por persona de Bienestar">
        <h2 className="sidebar-group-title">Personal de Bienestar</h2>
        <ul className="sidebar-list">
          {staffMembers.map((member) => (
            <li key={member.id}>
              <button
                type="button"
                className={`sidebar-staff ${member.id === activeStaffId ? "is-active" : ""}`}
                style={{ "--staff-color": member.color }}
                onClick={() => onStaffChange(member.id)}
                aria-pressed={member.id === activeStaffId}
              >
                <span className="sidebar-staff-dot" />
                <span>
                  <span className="sidebar-staff-name">{member.name}</span>
                  <span className="sidebar-staff-role">{member.role}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="sidebar-group" aria-label="Secciones del informe">
        <h2 className="sidebar-group-title">Contenido</h2>
        <ul className="sidebar-list">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                className={`sidebar-section ${
                  section.id === activeSectionId ? "is-active" : ""
                }`}
                onClick={() => onSectionChange(section.id)}
                aria-current={section.id === activeSectionId ? "true" : undefined}
              >
                {section.navLabel}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
