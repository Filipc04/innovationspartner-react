import { useState, type ReactNode } from "react";
import './RandomCard.css'
import { GiBus, GiModernCity, GiPowerLightning, GiTrophy } from "react-icons/gi";

interface Project {
  tag: string;
  title: string;
  text: string;
  icon: ReactNode;
  label: string;
}

const projects: Project[] = [
  {
    tag:    "Senaste framgång",
    title:  "Tracy of Sweden AB",
    text:   "Vi hjälpte Tracy of Sweden att söka och beviljas 1 825 000 kr i Vinnova-finansiering för att skala upp sin hållbara textilteknologi till en internationell marknad.",
    icon:   <GiTrophy />,
    label:  "Vinnova-anslag 2023"
  },
  {
    tag:    "Projekt i fokus",
    title:  "Grön stadsutveckling",
    text:   "Tillsammans med en av Malmös ledande fastighetsutvecklare navigerade vi EU:s Horisont-program och säkrade finansiering för ett klimatneutralt bostadskvarter.",
    icon:   <GiModernCity />,
    label:  "EU Horisont-projekt"
  },
  {
    tag:    "Projekt i fokus",
    title:  "Förnybar energilösning",
    text:   "En startup inom vätgasteknik fick vårt stöd med affärsutveckling och en framgångsrik bidragsansökan till Energimyndigheten, från idé till finansierat bolag på 8 månader.",
    icon:   <GiPowerLightning />,
    label:  "Energimyndigheten-bidrag"
  },
  {
    tag:    "Projekt i fokus",
    title:  "Hållbar mobilitetstjänst",
    text:   "Vi coachade ett mobilitetsstartup genom hela inkubatorprocessen på Ideon Science Park och tog dem från MVP till sin första B2B-kund inom laddinfrastruktur.",
    icon:   <GiBus />,
    label:  "Inkubator-genomgång"
  }
];

export const RandomCard = () => {
  const [project] = useState(
    () => projects[Math.floor(Math.random() * projects.length)]
  );
  
  return (
    <div className="spotlight">
      <div className="spotlight-inner">
        <div className="spotlight-icon" aria-hidden="true">{project.icon}</div>
        <div className="spotlight-content">
          <span className="spotlight-tag">{project.tag}</span>
          <h3 className="spotlight-title">{project.title}</h3>
          <p className="spotlight-text">{project.text}</p>
          <span className="spotlight-label">{project.label}</span>
        </div>
      </div>
    </div>
  );
};