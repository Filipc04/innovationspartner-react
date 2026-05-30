import { VscGraph } from "react-icons/vsc"
import { EduCard, Footer, Header, ScrollButton, TimeLine } from "../../components"
import './About.css'
import { PiCityLight, PiLightningFill, PiStudentBold } from "react-icons/pi"
import { CiPill } from "react-icons/ci"
import { GiTreeBranch } from "react-icons/gi"
import { FaBus, FaGlobeAfrica } from "react-icons/fa"
import { MdStarRate } from "react-icons/md"


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
                  <EduCard year="1984" degree="Master of Economics" school="Lunds Universitet" />
                  <EduCard year="1996" degree="Export Management" school="IHM Business School" />
                  <EduCard year="2008" degree="Place Marketing Mgmt" school="Lunds Universitet" />
                  <EduCard year="2014" degree="International Trade Mgmt" school="ITM" />
                </div>
              </div>

              <div>
                <h2 className="about-page-subtitle">Erfarenhet</h2>
                <div className="timeline" role="list">
                    <TimeLine icon={<MdStarRate />} year="2019 - nu" role="Innovationspartner Sverige"text="Grundade Innovationspartner med fokus på hållbara innovationsprojekt, bidragsfinansiering och affärsutveckling." />

                    <TimeLine icon={<VscGraph />} year="2018 - nu" role="Hållbarhetsanalys" text="Specialist inom hållbarhetsanalyser och tjänster kopplade till klimatfrågor för stora och små företag." />

                    <TimeLine icon={<FaGlobeAfrica />} year="2005-2015" role="Stads- & Landsbygdsutveckling" text="Projektledning inom stads- och landsbygdsutveckling samt finansiering av regionala projekt."/>
                </div>

                <div className="skills-box">
                  <div className="skills-box-title">Branscherfarenhet</div>
                  <div className="skills-tags">
                    <span className="skills-tag"><span className="skills-tag-icon"><PiCityLight /></span> Stadsutveckling</span>
                    <span className="skills-tag"><span className="skills-tag-icon"><PiLightningFill /></span> Energi &amp; bränsle</span>
                    <span className="skills-tag"><span className="skills-tag-icon"><FaBus /></span> Mobilitet</span>
                    <span className="skills-tag"><span className="skills-tag-icon"><GiTreeBranch /></span> Natur &amp; miljö</span>
                    <span className="skills-tag"><span className="skills-tag-icon"><CiPill /></span> Medicin &amp; hälsa</span>
                    <span className="skills-tag"><span className="skills-tag-icon"><PiStudentBold /></span> Utbildning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollButton />
      <Footer />
    </>
  )
}