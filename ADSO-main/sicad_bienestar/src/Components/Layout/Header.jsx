import "./Header.css";

/**
 * Encabezado del contenido principal. Repite la persona de Bienestar
 * activa junto al título de la sección para que quede claro, sin
 * ambigüedad, qué recorte de datos se está viendo — especialmente útil
 * al hacer scroll.
 */
function Header({ sectionHeading, staffMember }) {
  return (
    <header className="content-header">
      <h2 className="content-header-title">{sectionHeading}</h2>
      <div className="content-header-staff" style={{ "--staff-color": staffMember.color }}>
        <span className="content-header-dot" />
        {staffMember.name}
      </div>
    </header>
  );
}

export default Header;
