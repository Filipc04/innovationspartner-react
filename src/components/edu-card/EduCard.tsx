import './EduCard.css'

interface EduCardProps {
  year: string;
  degree: string;
  school: string;
}

export const EduCard = ( {year, degree, school}: EduCardProps ) => {
  return(
    <div className="edu-card">
      <div className="edu-year">{year}</div>
      <div className="edu-degree">{degree}</div>
      <div className="edu-school">{school}</div>
    </div>
  )
}