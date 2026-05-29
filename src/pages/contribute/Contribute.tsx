import { Footer, Header, HeadingSection, InfoCard } from "../../components"

import './Contribute.css'
import { PiLightningFill, PiCityLight, PiStudentBold } from "react-icons/pi";
import { FaBus } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";
import { CiPill } from "react-icons/ci";

export const Contribute = () => {
  return (
    <>
      <Header />
      <main role="main">

        <HeadingSection tag="Bidra till projekt" heading="Bli en del av lösningen" subtext="Är ni intresserade av att stötta och bidra till hållbarhetsprojekt? Vi sammanför er med projektägare och hittar intressanta lösningar för att fler projekt ska se dagens ljus."/>

        <section className="section" aria-labelledby="areas-heading">
          <div className="container">

            <div className="areas-intro">
              <span className="tag">Fokusområden</span>
              <h2 id="areas-heading" className="section-title">Projekt vi söker stöd för</h2>
            </div>

            <div className="areas-grid" role="list">
              <InfoCard
                icon={<PiCityLight />}
                title="Hållbar stadsutveckling"
                description="Smarta städer, grön infrastruktur och hållbara transportsystem för framtidens urbana miljöer."
              />

              <InfoCard
                icon={<PiLightningFill />}
                title="Energi & bränsle"
                description="Förnybar energi, energieffektivisering och alternativa bränslen för en fossilfri framtid."
              />

              <InfoCard
                icon={<FaBus />}
                title="Mobilitetslösningar"
                description="Hållbara transporter, elektrifiering och ny mobilitetsteknik för människor och gods."
              />

              <InfoCard
                icon={<GiTreeBranch />}
                title="Natur & miljö"
                description="Biologisk mångfald, skogsbruk och ekosystemtjänster som bidrar till planetens välmående."
              />

              <InfoCard
                icon={<CiPill />}
                title="Medicin & hälsa"
                description="Innovativa lösningar inom diagnostik, behandling och förebyggande hälsovård."
              />

              <InfoCard
                icon={<PiStudentBold />}
                title="Utbildning & beteende"
                description="Pedagogiska innovationer och beteendeförändringar som driver hållbar omställning."
              />
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