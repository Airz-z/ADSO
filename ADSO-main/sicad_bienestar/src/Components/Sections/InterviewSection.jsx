import EmptyState from "../UI/EmptyState";
import "./InterviewSection.css";

/**
 * Respuestas abiertas de una única persona de Bienestar, en formato pregunta →
 * respuesta. Los datos vienen de data/interviewData.js y están pensados
 * para editarse ahí directamente una vez tengas las respuestas reales.
 */
function InterviewSection({ answers }) {
  if (!answers || answers.length === 0) return <EmptyState />;

  return (
    <ol className="interview-list">
      {answers.map((entry, index) => (
        <li key={entry.question} className="interview-item">
          <span className="interview-index">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p className="interview-question">{entry.question}</p>
            <p className="interview-answer">{entry.answer}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default InterviewSection;
