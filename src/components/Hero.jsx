import { ArrowRight, FileText, Mail, GraduationCap, Code, Brain, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import photo from '../assets/photo.png';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="greeting">
            <span className="greeting-icon">✈</span>
            <span>{t('hero.greeting')}</span>
          </div>
          
          <h1 className="hero-title">
            Yassine <span className="text-accent">Frikha</span>
          </h1>
          
          <h2 className="hero-subtitle">
            {t('hero.subtitle')}
          </h2>
          
          <p className="hero-description">
            {t('hero.description')}
          </p>
          
          <div className="hero-actions">
            <a href="#projets" className="btn-primary">
              {t('hero.viewProjects')}
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              {t('hero.contactMe')}
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/YassineFrikha03" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/yassine-frikha-114502422/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://wa.me/+21656593648" target="_blank" rel="noreferrer" className="social-link" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            <a href="mailto:yassinefrikha0@gmail.com" className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <img 
            src={photo}
            alt="Yassine Frikha" 
            className="hero-image" 
          />
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <GraduationCap className="stat-icon" size={24} />
          <span className="stat-title">{t('hero.stats.years')}</span>
          <span className="stat-value">{t('hero.stats.yearsValue')}</span>
          <span className="stat-desc">{t('hero.stats.yearsDesc')}</span>
        </div>
        
        <div className="stat-card">
          <Code className="stat-icon" size={24} />
          <span className="stat-title">{t('hero.stats.projects')}</span>
          <span className="stat-value">{t('hero.stats.projectsValue')}</span>
          <span className="stat-desc">{t('hero.stats.projectsDesc')}</span>
        </div>
        
        <div className="stat-card">
          <Brain className="stat-icon" size={24} />
          <span className="stat-title">{t('hero.stats.tech')}</span>
          <span className="stat-value">{t('hero.stats.techValue')}</span>
          <span className="stat-desc">{t('hero.stats.techDesc')}</span>
        </div>
        
        <div className="stat-card">
          <Trophy className="stat-icon" size={24} />
          <span className="stat-title">{t('hero.stats.goal')}</span>
          <span className="stat-value">{t('hero.stats.goalValue')}</span>
          <span className="stat-desc">{t('hero.stats.goalDesc')}</span>
        </div>
      </div>
    </section>
  );
}