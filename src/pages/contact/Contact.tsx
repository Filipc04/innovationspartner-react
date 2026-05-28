import './Contact.css'
import { Footer, Header } from '../../components'
import { MdPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkedAlt, FaMapPin } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <Header />

      <main role="main">
        <section className="section" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-grid">

              <div
                className="contact-form-box"
                id="form-container"
                role="region"
                aria-labelledby="contact-heading"
              >
                <h1 id="contact-heading" className="form-title">
                  Kontakta oss
                </h1>

                <form
                  id="contact-form"
                  action="https://formspree.io/f/xvzdjneg"
                  method="POST"
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fname">
                        Förnamn *
                      </label>

                      <input
                        className="form-input"
                        type="text"
                        id="fname"
                        name="fname"
                        required
                        autoComplete="given-name"
                        aria-required="true"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="lname">
                        Efternamn *
                      </label>

                      <input
                        className="form-input"
                        type="text"
                        id="lname"
                        name="lname"
                        required
                        autoComplete="family-name"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      E-post *
                    </label>

                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      Företag
                    </label>

                    <input
                      className="form-input"
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phase">
                      Projektfas
                    </label>

                    <select
                      className="form-input form-select"
                      id="phase"
                      name="phase"
                    >
                      <option value="">Välj fas...</option>
                      <option value="idea">Idéstadiet</option>
                      <option value="startup">Start-Up</option>
                      <option value="existing">Befintlig verksamhet</option>
                      <option value="contribute">Vill bidra till projekt</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Berätta om ert projekt *
                    </label>

                    <textarea
                      className="form-input"
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      placeholder="Beskriv kortfattat ert projekt och hur vi kan hjälpa..."
                    />
                  </div>

                  <input
                    type="hidden"
                    name="_replyto"
                    value="bengtfille@gmail.com"
                  />

                  <button
                    type="submit"
                    id="submit-btn"
                    className="btn btn--primary contact-submit-btn"
                  >
                    Skicka förfrågan →
                  </button>
                </form>
              </div>

              <div className="contact-info-col">
                <span className="tag">Kontaktuppgifter</span>

                <h2 className="contact-info-title">
                  Välkommen att höra av er!
                </h2>

                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon" aria-hidden="true">
                      <MdPhone />
                    </div>

                    <div>
                      <div className="contact-item-title">Telefon</div>

                      <address className="contact-item-text">
                        <a href="tel:+46733103305">+46 733-103305</a>
                      </address>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon" aria-hidden="true">
                      <AiOutlineMail/>
                    </div>

                    <div>
                      <div className="contact-item-title">E-post</div>

                      <address className="contact-item-text">
                        <a href="mailto:tf@innovationspartner.se">
                          tf@innovationspartner.se
                        </a>
                      </address>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon" aria-hidden="true">
                      <FaMapPin/>
                    </div>

                    <div>
                      <div className="contact-item-title">Adress</div>

                      <address className="contact-item-text">
                        Uttervägen 8
                        <br />
                        246 52 Löddeköpinge
                      </address>
                    </div>
                  </div>
                </div>

                <div
                  className="contact-map"
                  role="img"
                  aria-label="Kartvy - Uttervägen 8, Löddeköpinge"
                >
                  <div className="contact-map-icon" aria-hidden="true">
                    <FaMapMarkedAlt />
                  </div>

                  <div className="contact-map-label">
                    Löddeköpinge, Skåne
                  </div>

                  <a
                    href="https://maps.google.com/?q=Utterv%C3%A4gen+8,+246+52+L%C3%B6ddek%C3%B6pinge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ext-link contact-map-link"
                  >
                    Öppna i Google Maps →
                  </a>
                </div>

                <div className="contact-note">
                  <strong>Kostnadsfri inledande konsultation.</strong>
                  {' '}
                  Vi berättar om möjliga finansieringsvägar och hur vi kan stödja
                  just ert projekt, utan förbehåll.
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