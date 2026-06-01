import './Contact.css'
import { useState } from 'react'
import { Footer, Header, ScrollButton } from '../../components'
import { MdPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkedAlt, FaMapPin } from "react-icons/fa";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    setEmail(data.get("email") as string);

    try {
      const response = await fetch(form.action, { method: "POST", body: data, headers: { "Accept": "application/json" } });

      if (response.ok) setSubmitted(true);
      else {
        const json = await response.json();
        const msg = json?.errors?.map((err: { message: string }) => err.message).join(", ") ?? "Något gick fel. Försök igen senare.";
        alert(msg);
      }
    } catch {
      alert("Nätverksfel. Kontrollera din anslutning och försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main role="main">
        <section className="section" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-grid">

              <div className="contact-form-box" role="region" aria-labelledby="contact-heading">
                {submitted ? (
                  <div className="form-success-msg">
                    <h2 className='thank-msg'>Tack för ditt meddelande!</h2>
                    <p>Vi har tagit emot din förfrågan och återkommer till dig på <strong>{email}</strong> så snart vi kan.</p>
                  </div>
                ) : (
                  <>
                    <h1 id="contact-heading" className="form-title">Kontakta oss</h1>

                    <form action="https://formspree.io/f/xvzdjneg" method="POST" onSubmit={handleSubmit}>

                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label" htmlFor="fname">Förnamn *</label>
                          <input className="form-input" id="fname" name="fname" type="text" required autoComplete="given-name" />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="lname">Efternamn *</label>
                          <input className="form-input" id="lname" name="lname" type="text" required autoComplete="family-name" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="email">E-post *</label>
                        <input className="form-input" id="email" name="email" type="email" required autoComplete="email" />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Företag</label>
                        <input className="form-input" id="company" name="company" type="text" autoComplete="organization" />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="phase">Projektfas</label>
                        <select className="form-input form-select" id="phase" name="phase">
                          <option value="">Välj fas...</option>
                          <option value="idea">Idéstadiet</option>
                          <option value="startup">Start-Up</option>
                          <option value="existing">Befintlig verksamhet</option>
                          <option value="contribute">Vill bidra till projekt</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="message">Berätta om ert projekt *</label>
                        <textarea className="form-input" id="message" name="message" rows={5} required placeholder="Beskriv kortfattat ert projekt och hur vi kan hjälpa..." />
                      </div>

                      <input type="hidden" name="_replyto" value="bengtfille@gmail.com" />

                      <button type="submit" className="btn btn--primary contact-submit-btn" disabled={loading}>
                        {loading ? "Skickar…" : "Skicka förfrågan"}
                      </button>
                    </form>
                  </>
                )}
              </div>

              <div className="contact-info-col">
                <span className="tag">Kontaktuppgifter</span>
                <h2 className="contact-info-title">Välkommen att höra av er!</h2>

                <div className="contact-items">

                  <div className="contact-item">
                    <div className="contact-icon"><MdPhone /></div>
                    <div>
                      <div className="contact-item-title">Telefon</div>
                      <address className="contact-item-text"><a href="tel:+46733103305">+46 733-103305</a></address>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon"><AiOutlineMail /></div>
                    <div>
                      <div className="contact-item-title">E-post</div>
                      <address className="contact-item-text"><a href="mailto:tf@innovationspartner.se">tf@innovationspartner.se</a></address>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon"><FaMapPin /></div>
                    <div>
                      <div className="contact-item-title">Adress</div>
                      <address className="contact-item-text">
                        <a href="https://maps.google.com/?q=Utterv%C3%A4gen+8,+246+52+L%C3%B6ddek%C3%B6pinge" target='_blank'>Uttervägen 8<br />246 52 Löddeköpinge</a>
                      </address>
                    </div>
                  </div>

                </div>

                <div className="contact-map" role="img" aria-label="Kartvy - Uttervägen 8, Löddeköpinge">
                  <div className="contact-map-icon"><FaMapMarkedAlt /></div>
                  <div className="contact-map-label">Löddeköpinge, Skåne</div>
                  <a className="ext-link contact-map-link"
                     href="https://maps.google.com/?q=Utterv%C3%A4gen+8,+246+52+L%C3%B6ddek%C3%B6pinge"
                     target="_blank" rel="noopener noreferrer">
                    Öppna i Google Maps →
                  </a>
                </div>

                <div className="contact-note">
                  <strong>Kostnadsfri inledande konsultation.</strong>{' '}
                  Vi berättar om möjliga finansieringsvägar och hur vi kan stödja just ert projekt, utan förbehåll.
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>
      <ScrollButton />
      <Footer />
    </>
  );
};