import type { ReactNode } from 'react';
import './InfoCard.css';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const InfoCard = ( {icon, title, description}: InfoCardProps ) => {
  return(
    <article className="area-card" role="listitem">
      <div className="area-icon" aria-hidden="true">{icon}</div>
      <h3 className="area-title">{title}</h3>
      <p className="area-desc">{description}</p>
    </article>
  )
}