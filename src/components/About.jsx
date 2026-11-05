import { MapPin, GraduationCap, Briefcase, Zap, Search, Users, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <span className="section-subtitle">{t('about.subtitle')}</span>
      <h2 className="section-title">{t('about.title')}</h2>
      
      <div className="about-content mt-8">
        <div className="about-text">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          
          <div className="about-tags">
            <div className="about-tag">
              <MapPin className="about-tag-icon" size={20} />
              <span>Tunis, Tunisie</span>
            </div>
            <div className="about-tag">
              <GraduationCap className="about-tag-icon" size={20} />
              <span>FSEGT</span>
            </div>
            <div className="about-tag">
              <Briefcase className="about-tag-icon" size={20} />
              <span>Stage : SEPTEO Tunisie</span>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Workspace" 
          />
        </div>
      </div>
      
      <div className="values-grid">
        <div className="value-item">
          <Zap className="value-icon" size={32} />
          <span className="value-title">{t('about.values.perseverance')}</span>
          <span className="value-desc">{t('about.values.perseveranceDesc')}</span>
        </div>
        <div className="value-item">
          <Search className="value-icon" size={32} />
          <span className="value-title">{t('about.values.curiosity')}</span>
          <span className="value-desc">{t('about.values.curiosityDesc')}</span>
        </div>
        <div className="value-item">
          <Users className="value-icon" size={32} />
          <span className="value-title">{t('about.values.team')}</span>
          <span className="value-desc">{t('about.values.teamDesc')}</span>
        </div>
        <div className="value-item">
          <CheckCircle className="value-icon" size={32} />
          <span className="value-title">{t('about.values.rigor')}</span>
          <span className="value-desc">{t('about.values.rigorDesc')}</span>
        </div>
      </div>
    </section>
  );
}