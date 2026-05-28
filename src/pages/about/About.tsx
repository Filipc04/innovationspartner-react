import { VscGraph } from "react-icons/vsc"
import { Footer, Header } from "../../components"
import './About.css'

export const About = () => {
  return (
    <>
      <Header />
      <main role="main">
        <section className="section" aria-labelledby="about-heading">
          <div className="container">
            <div className="about-page-grid">

              <div>
                <span className="tag">Om oss</span>
                <h1 id="about-heading" className="section-title">Torbjörn Friede - Er affärskonsult</h1>
                <p className="about-intro">Torbjörn Friede är konsult och executive coach med gedigen erfarenhet från B2B-försäljning, affärsutveckling och kommersialisering av nya hållbara företag, nationellt och internationellt.</p>
                <p className="about-intro">Under de senaste åren har han specialiserat sig inom hållbarhetsprojekt och deras potential att bidra till de globala hållbarhetsmålen (SDGs) inom de flesta branscher.</p>

                <h2 className="about-page-subtitle">Utbildning</h2>
                <div className="edu-grid">
                  <div className="edu-card">
                    <div className="edu-year">1984</div>
                    <div className="edu-degree">Master of Economics</div>
                    <div className="edu-school">Lunds Universitet</div>
                  </div>
                  <div className="edu-card">
                    <div className="edu-year">1996</div>
                    <div className="edu-degree">Export Management</div>
                    <div className="edu-school">IHM Business School</div>
                  </div>
                  <div className="edu-card">
                    <div className="edu-year">2008</div>
                    <div className="edu-degree">Place Marketing Mgmt</div>
                    <div className="edu-school">Lunds Universitet</div>
                  </div>
                  <div className="edu-card">
                    <div className="edu-year">2014</div>
                    <div className="edu-degree">International Trade Mgmt</div>
                    <div className="edu-school">ITM</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="about-page-subtitle">Erfarenhet</h2>
                <div className="timeline" role="list">
                  <div className="timeline-item" role="listitem">
                    <div className="timeline-dot" aria-hidden="true">★</div>
                    <div>
                      <div className="timeline-year">2019 - nu</div>
                      <div className="timeline-role">Innovationspartner Sverige</div>
                      <p className="timeline-text">Grundade Innovationspartner med fokus på hållbara innovationsprojekt, bidragsfinansiering och affärsutveckling.</p>
                    </div>
                  </div>
                  <div className="timeline-item" role="listitem">
                    <div className="timeline-dot" aria-hidden="true"><VscGraph/></div>
                    <div>
                      <div className="timeline-year">2018 - nu</div>
                      <div className="timeline-role">Hållbarhetsanalys</div>
                      <p className="timeline-text">Specialist inom hållbarhetsanalyser och tjänster kopplade till klimatfrågor för stora och små företag.</p>
                    </div>
                  </div>
                  <div className="timeline-item" role="listitem">
                    <div className="timeline-dot" aria-hidden="true">🌍</div>
                    <div>
                      <div className="timeline-year">2005-2015</div>
                      <div className="timeline-role">Stads- &amp; Landsbygdsutveckling</div>
                      <p className="timeline-text">Projektledning inom stads- och landsbygdsutveckling samt finansiering av regionala projekt.</p>
                    </div>
                  </div>
                </div>

                <div className="skills-box">
                  <div className="skills-box-title">Branscherfarenhet</div>
                  <div className="skills-tags">
                    <span className="skills-tag">🏙️ Stadsutveckling</span>
                    <span className="skills-tag">⚡ Energi &amp; bränsle</span>
                    <span className="skills-tag">🚗 Mobilitet</span>
                    <span className="skills-tag">🌿 Natur &amp; miljö</span>
                    <span className="skills-tag">💊 Medicin &amp; hälsa</span>
                    <span className="skills-tag">📚 Utbildning</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}