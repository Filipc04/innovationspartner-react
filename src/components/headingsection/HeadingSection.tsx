import './HeadingSection.css';

interface HeadingSectionProps {
  tag: string;
  heading: string;
  subtext: string;
  note?: string;
}


export const HeadingSection = ( {tag, heading, subtext, note}: HeadingSectionProps ) => {
  return(
    <section className="contribute-hero" aria-labelledby="contribute-heading">
      <div className="container">
        <span className="tag">{tag}</span>
        <h1 id="contribute-heading" className="section-title">{heading}</h1>
        <p className="section-sub">{subtext}</p>
        <p className="section-note">{note}</p>
      </div>
    </section>
  )
}