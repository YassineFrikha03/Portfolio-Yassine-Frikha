import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); // '', 'loading', 'success', 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Envoi en cours...");

    const formData = new FormData(event.target);

    // TODO: Remplacez cette clé par celle reçue par email depuis web3forms.com
    formData.append("access_key", "6fb4e005-f2bd-4ebb-a137-fcf02c12d736");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message envoyé avec succès ! Je vous répondrai très vite.");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      setStatus("error");
      setResult("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="section-subtitle">{t('contact.subtitle')}</span>
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-description" style={{ margin: '0 auto' }}>
          {t('contact.description')}
        </p>
      </div>

      <div className="contact-container">
        
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="contact-card-title">Email</h4>
              <p className="contact-card-desc">yassinefrikha0@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="contact-card-title">{t('contact.phone')}</h4>
              <p className="contact-card-desc">+216 56 593 648</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="contact-card-title">{t('contact.location')}</h4>
              <p className="contact-card-desc">Tunis, Tunisie</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{t('contact.form.name')}</label>
                <input type="text" name="name" required placeholder={t('contact.form.namePlaceholder')} />
              </div>
              <div className="form-group">
                <label>{t('contact.form.email')}</label>
                <input type="email" name="email" required placeholder={t('contact.form.emailPlaceholder')} />
              </div>
            </div>
            <div className="form-group">
              <label>{t('contact.form.subject')}</label>
              <input type="text" name="subject" required placeholder={t('contact.form.subjectPlaceholder')} />
            </div>
            <div className="form-group">
              <label>{t('contact.form.message')}</label>
              <textarea name="message" required rows="5" placeholder={t('contact.form.messagePlaceholder')}></textarea>
            </div>
            
            <div className="form-submit-row">
              <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ border: 'none', opacity: status === 'loading' ? 0.7 : 1 }}>
                <Send size={18} />
                {status === 'loading' ? 'Envoi...' : t('contact.form.send')}
              </button>
              
              {result && (
                <span className={`form-result ${status}`}>
                  {status === 'success' && <CheckCircle2 size={18} />}
                  {result}
                </span>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}