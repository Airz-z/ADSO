import { getProblemsFromProcess } from "../../utils/calculations";
import EmptyState from "../UI/EmptyState";
import "./ProblemsSection.css";

/**
 * Reutiliza los problemas ya descritos en cada paso del proceso actual
 * (ver utils/calculations.js) en vez de duplicar esa información en un
 * nuevo archivo de datos.
 */
function ProblemsSection({ process }) {
  const problems = getProblemsFromProcess(process);

  if (problems.length === 0) return <EmptyState />;

  return (
    <ul className="problems-list">
      {problems.map((item) => (
        <li key={item.description} className="problem-item">
          <p className="problem-context">Durante: {item.description}</p>
          <p className="problem-text">{item.problem}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProblemsSection;
