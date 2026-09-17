import { useState } from "react";
import Sidebar from "./Components/Layout/Sidebar";
import Header from "./Components/Layout/Header";
import ProcessSection from "./Components/Sections/ProcessSection";
import ProblemsSection from "./Components/Sections/ProblemsSection";
import SurveyChartsSection from "./Components/Sections/SurveyChartsSection";
import InterviewSection from "./omponents/Sections/InterviewSection";
import SurveySection from "./Components/Sections/SurveySection";
import NeedsSection from "./Components/Sections/NeedsSection";
import RequirementsSection from "./Components/Sections/RequirementsSection";
import ConclusionsSection from "./Components/Sections/ConclusionsSection";

import { staffMembers, getStaffById } from "./data/staff";
import { processData } from "./data/processData";
import { openAnswersData } from "./data/openAnswersData";
import { surveyData } from "./data/surveyData";
import { needsData } from "./data/needsData";
import { requirementsData } from "./data/requirementsData";
import { conclusionsData } from "./data/conclusionsData";
import { SECTIONS, DEFAULT_SECTION_ID } from "./Utils/constants";

import "./App.css";

/**
 * Punto de ensamblaje: mantiene en estado la persona de Bienestar activa y
 * la sección activa, y le pasa a cada sección únicamente el recorte de
 * datos que le corresponde. Agregar una persona nueva solo requiere
 * añadir una entrada en cada archivo de /data — no hay que tocar este
 * archivo ni los componentes.
 */
function App() {
  const [activeStaffId, setActiveStaffId] = useState(staffMembers[0].id);
  const [activeSectionId, setActiveSectionId] = useState(DEFAULT_SECTION_ID);

  const activeStaff = getStaffById(activeStaffId);
  const activeSection = SECTIONS.find((section) => section.id === activeSectionId);

  const process = processData[activeStaffId];

  const renderSection = () => {
    switch (activeSectionId) {
      case "proceso":
        return <ProcessSection process={process} />;
      case "problemas":
        return <ProblemsSection process={process} />;
      case "graficas":
        return (
          <SurveyChartsSection
            survey={surveyData[activeStaffId]}
            staffColor={activeStaff.color}
          />
        );
      case "entrevista":
        return <InterviewSection answers={openAnswersData[activeStaffId]} />;
      case "encuesta":
        return <SurveySection survey={surveyData[activeStaffId]} />;
      case "necesidades":
        return <NeedsSection needs={needsData[activeStaffId]} />;
      case "requisitos":
        return <RequirementsSection requirements={requirementsData[activeStaffId]} />;
      case "conclusiones":
        return <ConclusionsSection conclusions={conclusionsData} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar
        activeStaffId={activeStaffId}
        onStaffChange={setActiveStaffId}
        activeSectionId={activeSectionId}
        onSectionChange={setActiveSectionId}
      />
      <main className="app-content">
        <Header sectionHeading={activeSection.heading} staffMember={activeStaff} />
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
