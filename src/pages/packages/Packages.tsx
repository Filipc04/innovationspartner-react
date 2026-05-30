import { Footer, Header, ScrollButton } from "../../components"
import './Packages.css'

export const Packages = () => {
  return (
    <>
      <Header />
      <main role="main">
        <section className="section" aria-labelledby="packages-heading">
          <div className="container">

            <div className="packages-header">
              <span className="tag">Paket</span>
              <h1 id="packages-heading" className="section-title">Välj er startpunkt</h1>
              <p className="section-sub">Alla paket inkluderar inledande kostnadsfri genomgång. Konsultationspaketen kan finansieras via de bidrag vi hjälper er att söka.</p>
            </div>

            <div className="packages-grid" role="list">

              <article className="pkg-card" role="listitem">
                <div className="pkg-phase">Fas 1</div>
                <h2 className="pkg-title">Idéstadiet</h2>
                <p className="pkg-desc">Många fantastiska idéer förverkligas aldrig pga att inledande finansiering saknas. Vi hjälper er att hitta en väg framåt.</p>
                <ul className="pkg-features" aria-label="Ingår i paketet för idéstadiet">
                  <li className="pkg-feature">Idévalidering och marknadspotential</li>
                  <li className="pkg-feature">Kartläggning av finansieringsvägar</li>
                  <li className="pkg-feature">Hållbarhetspositionering</li>
                  <li className="pkg-feature">Presentation mot finansiärer</li>
                </ul>
                <div className="pkg-price">Offereras individuellt</div>
                <a href="contact" className="btn btn--primary pkg-btn-full">Begär offert</a>
              </article>

              <article className="pkg-card featured" role="listitem">
                <div className="pkg-badge">Populärast</div>
                <div className="pkg-phase">Fas 2</div>
                <h2 className="pkg-title">Start-Up</h2>
                <p className="pkg-desc">Tillsammans med inkubatorer och Science Parks vägleder vi er att finansiera, validera och skala upp verksamheten.</p>
                <ul className="pkg-features" aria-label="Ingår i Start-Up paketet">
                  <li className="pkg-feature">Bidragsansökan (Vinnova, EU m.fl.)</li>
                  <li className="pkg-feature">Incubator &amp; Science Park-kontakter</li>
                  <li className="pkg-feature">Teambuilding och partnerskap</li>
                  <li className="pkg-feature">Strategiutveckling &amp; skalning</li>
                  <li className="pkg-feature">Löpande mentorskap</li>
                </ul>
                <div className="pkg-price">Offereras individuellt</div>
                <a href="contact" className="btn btn--white pkg-btn-full">Begär offert</a>
              </article>

              <article className="pkg-card" role="listitem">
                <div className="pkg-phase">Fas 3</div>
                <h2 className="pkg-title">Befintlig verksamhet</h2>
                <p className="pkg-desc">Befintliga bolag som behöver utveckla nya varor och tjänster men saknar resurser för detta internt.</p>
                <ul className="pkg-features" aria-label="Ingår i paketet för befintlig verksamhet">
                  <li className="pkg-feature">Behovsanalys och projektdefinition</li>
                  <li className="pkg-feature">Projektledning och koordinering</li>
                  <li className="pkg-feature">Finansieringsstöd och ansökningar</li>
                  <li className="pkg-feature">Hållbarhetsintegration</li>
                </ul>
                <div className="pkg-price">Offereras individuellt</div>
                <a href="contact" className="btn btn--primary pkg-btn-full">Begär offert</a>
              </article>

            </div>

            <div className="packages-footer">
              <div>
                <h3>Ingår i alla paket</h3>
                <p>Genomgång av projektstatus · Strategival &amp; marknadsförutsättningar · Hållbarhetsanalys</p>
              </div>
              <a href="contact" className="btn btn--outline">Kontakta oss</a>
            </div>

          </div>
        </section>
      </main>
      <ScrollButton />
      <Footer />
    </>
  )
}