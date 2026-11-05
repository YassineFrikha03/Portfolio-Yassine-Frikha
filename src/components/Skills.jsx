import { ArrowRight, Code, Database, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  const skills = [
    { name: '.NET / C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  ];

  return (
    <section className="container">
      <span className="section-subtitle">{t('skills.subtitle')}</span>
      <h2 className="section-title">{t('skills.title')}</h2>
      <p className="section-description">
        {t('skills.description')}
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>{t('skills.servicesTitle')}</h3>
      <p className="section-description">
        {t('skills.servicesDescription')}
      </p>

      <div className="grid-3">
        <div className="service-card">
          <div className="service-icon-wrapper">
            <Monitor size={24} />
          </div>
          <h4 className="service-title">{t('skills.services.web')}</h4>
          <p className="service-desc">{t('skills.services.webDesc')}</p>
          <a href="#" className="service-link">
            {t('skills.more')} <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="service-card">
          <div className="service-icon-wrapper">
            <Code size={24} />
          </div>
          <h4 className="service-title">{t('skills.services.java')}</h4>
          <p className="service-desc">{t('skills.services.javaDesc')}</p>
          <a href="#" className="service-link">
            {t('skills.more')} <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="service-card">
          <div className="service-icon-wrapper">
            <Database size={24} />
          </div>
          <h4 className="service-title">{t('skills.services.db')}</h4>
          <p className="service-desc">{t('skills.services.dbDesc')}</p>
          <a href="#" className="service-link">
            {t('skills.more')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
