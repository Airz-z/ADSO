import Card from "../UI/Card";
import EmptyState from "../UI/EmptyState";
import "./ProcessSection.css";

/**
 * Muestra el proceso actual de una persona de Bienestar como una narrativa + una
 * línea de tiempo de pasos, en vez de una tabla. Es la sección de entrada
 * del informe, así que lleva el resumen en texto corrido primero.
 */
function ProcessSection({ process }) {
  if (!process) return <EmptyState />;

  return (
    <div className="process-section">
      <Card className="process-summary">
        <h3 className="process-name">{process.processName}</h3>
        <p className="process-summary-text">{process.summary}</p>
      </Card>

      <div className="process-actors">
        <h3 className="process-subheading">Actores involucrados</h3>
        <ul className="process-actors-list">
          {process.actors.map((actor) => (
            <li key={actor.actor} className="process-actor">
              <span className="process-actor-name">{actor.actor}</span>
              <span className="process-actor-role">{actor.role}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="process-timeline">
        <h3 className="process-subheading">Pasos del proceso actual</h3>
        <ol className="process-steps">
          {process.steps.map((step, index) => (
            <li key={step.description} className="process-step">
              <span className="process-step-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="process-step-body">
                <p className="process-step-description">{step.description}</p>
                <span className="process-step-time">{step.time}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ProcessSection;
