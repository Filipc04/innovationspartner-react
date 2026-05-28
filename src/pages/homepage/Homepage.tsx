import { Footer, Header, ScrollButton } from "../../components"
import './Homepage.css'
import { RiPlantLine, RiLightbulbFlashLine } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { VscGraph, VscGraphLine } from "react-icons/vsc";
import { TbPigMoney } from "react-icons/tb";
import { useEffect, useState } from "react";
import { numIncrease } from "../../components/numincreaser/numincreaser";

export const HomePage = () => {
  const [projects, setProjects] = useState(0); 
  const [year, setYear] = useState(0);

  useEffect(() => {
    numIncrease(40, setProjects, 1400);
    numIncrease(2019, setYear, 1100);
  }, []);

  return (
    <>
      <Header />
      <main role="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-grid">

              <div>
                <div className="badge">
                  <span className="badge-dot" aria-hidden="true"></span>
                  Verksamma sedan 2019
                </div>
                <h1 id="hero-heading" className="hero-title">
                  Er <em>innovations&shy;partner</em> för en hållbar framtid
                </h1>
                <p className="hero-sub">Vi hjälper er att finansiera, driva och skala upp hållbara innovationsprojekt - från idé till etablerat bolag.</p>
                <div className="hero-actions">
                  <a href="contact" className="btn btn--primary">Boka kostnadsfri konsultation</a>
                  <a href="packages" className="btn btn--white">Se våra paket →</a>
                </div>

                <div className="hero-stats" id="hero-stats" aria-label="Nyckeltal">
                  <div>
                    <div className="stat-num" id="stat-projects">{projects}+</div>
                    <div className="stat-label">Projekt genomförda</div>
                  </div>
                  <div>
                    <div className="stat-num stat-num--fade" id="stat-revenue">1,8M kr</div>
                    <div className="stat-label">Senaste Vinnova-anslag</div>
                  </div>
                  <div>
                    <div className="stat-num" id="stat-year">{year}</div>
                    <div className="stat-label">Grundat</div>
                  </div>
                </div>

                <div id="spotlight" aria-live="polite" aria-label="Slumpmässigt projekthöjdpunkt"></div>
              </div>

              <div className="hero-visual" aria-hidden="true">
                <div className="card-chip">
                  <div className="chip-icon"><RiPlantLine /></div>
                  <div>
                    <div className="chip-text">Hållbarhetsprojekt</div>
                    <div className="chip-sub">Klimat &amp; miljö</div>
                  </div>
                </div>
                <div className="card-chip">
                  <div className="chip-icon"><RiLightbulbFlashLine /></div>
                  <div>
                    <div className="chip-text">EU-fondfinansiering</div>
                    <div className="chip-sub">Nationella &amp; europeiska bidrag</div>
                  </div>
                </div>
                <div className="card-chip">
                  <div className="chip-icon"><IoRocketOutline /></div>
                  <div>
                    <div className="chip-text">Start-Up stöd</div>
                    <div className="chip-sub">Inkubatorer &amp; Science Parks</div>
                  </div>
                </div>
                <div className="card-chip">
                  <div className="chip-icon"><FaRegHandshake /></div>
                  <div>
                    <div className="chip-text">Affärsutveckling</div>
                    <div className="chip-sub">B2B &amp; kommersialisering</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="services-strip section--tight" aria-labelledby="services-strip-heading">
          <div className="container">
            <h2 id="services-strip-heading" className="sr-only">Våra kärnkompetenser</h2>
            <div className="services-grid" role="list">
              <article className="service-card" role="listitem">
                <div className="service-icon" aria-hidden="true"><TbPigMoney /></div>
                <h3 className="service-title">Bidragsfinansiering</h3>
                <p className="service-desc">EU-fonder, Vinnova, Tillväxtverket och stiftelser - vi navigerar finansieringslandskapet åt er.</p>
              </article>
              <article className="service-card" role="listitem">
                <div className="service-icon" aria-hidden="true"><VscGraph /></div>
                <h3 className="service-title">Hållbarhetsanalyser</h3>
                <p className="service-desc">Vi förankrar er innovation i klimat- och hållbarhetsperspektiv - ökar attraktionskraften för finansiärer.</p>
              </article>
              <article className="service-card" role="listitem">
                <div className="service-icon" aria-hidden="true"><VscGraphLine /></div>
                <h3 className="service-title">Affärsutveckling</h3>
                <p className="service-desc">Från kommersialisering till skalning - gedigen erfarenhet av B2B och internationella marknader.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="about-teaser-heading">
          <div className="container">
            <div className="about-grid">
              <div className="about-img-wrap">
                <div className="about-img" role="img" aria-label="Porträtt av Torbjörn Friede, grundare">
                  <div className="about-img-inner">
                    <span className="initials" aria-hidden="true">TF</span>
                    <span className="name">Torbjörn Friede</span>
                  </div>
                </div>
                <div className="about-badge" aria-label="Över 40 framgångsrika projekt">
                  <span className="num">40+</span>
                  <span className="lbl">Projekt</span>
                </div>
              </div>
              <div>
                <span className="tag">Om grundaren</span>
                <h2 id="about-teaser-heading" className="section-title">Konsult med djup branscherfarenhet</h2>
                <p className="section-sub">Torbjörn Friede är executive coach och konsult inom B2B-försäljning, affärsutveckling och kommersialisering av hållbara företag.</p>
                <ul className="about-list" aria-label="Kompetensområden">
                  <li>Projektledning nationellt och internationellt</li>
                  <li>Hållbarhetsanalyser och klimattjänster</li>
                  <li>Mentor för nystartade bolag</li>
                  <li>Master of Economics, Lunds Universitet (1984)</li>
                </ul>
                <a href="about" className="btn btn--outline">Läs mer om oss</a>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Har ni ett projekt i åtanke?</h2>
            <p>Inledande konsultation är kostnadsfri. Vi berättar om möjliga finansieringsvägar för just ert projekt.</p>
            <a href="contact" className="btn btn--white">Kontakta oss idag</a>
          </div>
        </section>

      </main>
      <ScrollButton />
      <Footer />
    </>
  )
}