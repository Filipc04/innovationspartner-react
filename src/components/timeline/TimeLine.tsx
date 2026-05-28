import type { ReactNode } from 'react';
import './TimeLine.css';

interface TimeLineProps {
  icon: ReactNode;
  year: string;
  role: string;
  text: string;
}

export const TimeLine = ( {icon, year, role, text}: TimeLineProps ) => {
  return(
    <div className="timeline-item" role="listitem">
      <div className="timeline-dot" aria-hidden="true">{icon}</div>
      <div>
        <div className="timeline-year">{year}</div>
        <div className="timeline-role">{role}</div>
        <p className="timeline-text">{text}</p>
      </div>
    </div>
  )
}