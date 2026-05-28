import { Footer, Header } from "../../components"
import './Contribute.css'

export const Contribute = () => {
  return (
    <>
      <Header />
      <main role="main">

        <section className="contribute-hero" aria-labelledby="contribute-heading">
          <div className="container">
            <span className="tag">Bidra till projekt</span>
            <h1 id="contribute-heading" className="section-title">Bli en del av lösningen</h1>
            <p className="section-sub">Är ni intresserade av att stötta och bidra till hållbarhetsprojekt? Vi sammanför er med projektägare och hittar intressanta lösningar för att fler projekt ska se dagens ljus.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="areas-heading">
          <div className="container">

            <div className="areas-intro">
              <span className="tag">Fokusområden</span>
              <h2 id="areas-heading" className="section-title">Projekt vi söker stöd för</h2>
            </div>

            <div className="areas-grid" role="list">

              <article className="area-card" role="listitem">
                <div className="area-icon" aria-hidden="true">🏙️</div>
                <h3 className="area-title">Hållbar stadsutveckling</h3>
                <p className="area-desc">Smarta städer, grön infrastruktur och hållbara transportsystem för framtidens urbana miljöer.</p>
              </article>

              <article className="area-card" role="listitem">
                <div className="area-icon" aria-hidden="true">⚡</div>
                <h3 className="area-title">Energi &amp; bränsle</h3>
                <p className="area-desc">Förnybar energi, energieffektivisering och alternativa bränslen för en fossilfri framtid.</p>
              </article>

              <article className="area-card" role="listitem">
                <div className="area-icon" aria-hidden="true">🚌</div>
                <h3 className="area-title">Mobilitetslösningar</h3>
                <p className="area-desc">Hållbara transporter, elektrifiering och ny mobilitetsteknik för människor och gods.</p>
              </article>

              <article className="area-card" role="listitem">
                <div className="area-icon" aria-hidden="true">🌿</div>
                <h3 className="area-title">Natur &amp; miljö</h3>
                <p className="area-desc">Biologisk mångfald, skogsbruk och ekosystemtjänster som bidrar till planetens välmående.</p>
              </article>

              <article className="area-card" role="listitem">
                <div className="area-icon" aria-hidden="true">💊</div>
                <h3 className="area-title">Medicin &amp; hälsa</h3>
                <p className="area-desc">Innovativa lösningar inom diagnostik, behandling och förebyggande hälsovård.</p>
              </article>

              <article className="area-card" role="listitem">
                <div className="area-icon" aria-hidden="true">📚</div>
                <h3 className="area-title">Utbildning &amp; beteende</h3>
                <p className="area-desc">Pedagogiska innovationer och beteendeförändringar som driver hållbar omställning.</p>
              </article>

            </div>

            <div className="contribute-cta">
              <p>Kontakta oss för att diskutera hur ni kan bidra och vilka projekt som söker partners just nu.</p>
              <a href="contact" className="btn btn--primary">Hör av er</a>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}