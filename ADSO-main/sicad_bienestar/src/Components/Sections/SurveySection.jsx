import EmptyState from "../UI/EmptyState";
import "./SurveySection.css";

/**
 * Respuestas "en crudo" de la encuesta de una persona de Bienestar (la visualización
 * gráfica vive en SurveyChartsSection). Se mantienen separadas porque el
 * brief pide poder editar las respuestas de texto sin tocar la lógica de
 * la gráfica.
 */
function SurveySection({ survey }) {
  if (!survey) return <EmptyState />;

  return (
    <div className="survey-section">
      <div className="survey-closed">
        <p className="survey-question">{survey.closedQuestion.question}</p>
        <p className="survey-answer">{survey.closedQuestion.selected}</p>
      </div>

      <ul className="survey-metrics">
        {survey.metrics.map((metric) => (
          <li key={metric.label} className="survey-metric-row">
            <span className="survey-metric-label">{metric.label}</span>
            <span className="survey-metric-value">{metric.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SurveySection;
