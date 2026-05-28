import { Accordion, AccordionItem, Footer, Header, ScrollButton } from "../../components";
import './Services.css';

export const Services = () => {

  return (
    <>
      <Header />
      <main role="main">
        <section className="section" aria-labelledby="services-heading">
          <div className="container">

            <div className="services-header">
              <span className="tag">Tjänster</span>
              <h1 id="services-heading" className="section-title">Vad vi erbjuder</h1>
              <p className="section-sub">Oavsett var ni befinner er i processen, från idéstadiet till befintlig verksamhet, har vi rätt stöd för er resa.</p>
            </div>

            <Accordion>
              <AccordionItem title="Inledande projektdiskussion" content="Vi börjar alltid med ett kostnadsfritt samtal där vi kartlägger ert projekt, era visioner och er nulägesanalys. Utifrån detta identifierar vi vilka finansieringsvägar som passar bäst, EU-fonder, nationella bidrag eller stiftelsefinansiering."/>
              <AccordionItem title="Bidragsansökan & finansiering" content="Vi har bred erfarenhet av att framgångsrikt söka bidrag från Vinnova, Tillväxtverket, EU-fonder och privata stiftelser. Vi skriver ansökningar, koordinerar med partners och ser till att rätt underlag finns på plats. Vår senaste framgång: 1 825 000 kr till Tracy of Sweden AB."/>
              <AccordionItem title="Hållbarhetsanalys" content="Att positionera er innovation ur ett klimat- och hållbarhetsperspektiv skapar tydliga konkurrensfördelar i ansökningar och i marknadsföring. Vi hjälper er att koppla projektets effekter till globala hållbarhetsmål (SDGs) och relevanta ramverk."/>
              <AccordionItem title="Strategisk affärsutveckling" content="Med erfarenhet från internationell handel och B2B-försäljning guidar vi er i strategival, marknadsetablering och kommersialisering. Vi hjälper er att bygga starka team och partnerskap som ger ert projekt rätt förutsättningar."/>
              <AccordionItem title="Mentorskap för startups" content="Att ta ett företag från idé till etablerad aktör är en lång resa. Som mentor och coach hjälper vi er att undvika vanliga fallgropar, välja rätt inkubatorer och Science Parks, och navigera resan från StartUp till skalbar verksamhet."/>
            </Accordion>

            <div className="services-cta">
              <p>Hör av er för att diskutera hur vi kan anpassa stödet för just ert projekt.</p>
              <a href="contact.html" className="btn btn--primary">Kontakta oss</a>
            </div>
          </div>
        </section>
      </main>
        
      <ScrollButton/>
      <Footer />
    </>
  );
};