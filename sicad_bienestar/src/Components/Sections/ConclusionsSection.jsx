import "./ConclusionsSection.css";

/**
 * Conclusiones generales del equipo. A diferencia de las demás secciones,
 * no depende de la persona seleccionada: por eso no recibe esa prop.
 */
function ConclusionsSection({ conclusions }) {
  return (
    <div className="conclusions-section">
      <p className="conclusions-note">
        Estas conclusiones son transversales a todo el personal de Bienestar consultado.
      </p>
      <ul className="conclusions-list">
        {conclusions.map((conclusion) => (
          <li key={conclusion} className="conclusion-item">
            {conclusion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConclusionsSection;
