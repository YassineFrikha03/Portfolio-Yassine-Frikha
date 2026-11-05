import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Images Zink
import zink1 from '../assets/zink/1.png';
import zink2 from '../assets/zink/2.png';
import zink3 from '../assets/zink/3.png';
import zink4 from '../assets/zink/4.png';
import zink5 from '../assets/zink/5.png';
import zink6 from '../assets/zink/6.png';

// Images Tech Store
import tech1 from '../assets/tech/1.jpg';
import tech2 from '../assets/tech/2.jpg';
import tech3 from '../assets/tech/3.jpg';
import tech4 from '../assets/tech/4.jpg';
import tech5 from '../assets/tech/5.jpg';

// Images SECCC
import seccc1 from '../assets/seccc/1.png';
import seccc2 from '../assets/seccc/2.png';
import seccc3 from '../assets/seccc/3.png';
import seccc4 from '../assets/seccc/4.png';
import seccc5 from '../assets/seccc/5.png';

// Images CSS Store
import css1 from '../assets/CSS store/1.png';
import css2 from '../assets/CSS store/2.png';
import css3 from '../assets/CSS store/3.png';
import css4 from '../assets/CSS store/4.png';
import css5 from '../assets/CSS store/5.png';

// DWT
import dwt1 from '../assets/dwt/1.png';
import dwt2 from '../assets/dwt/2.png';
import dwt3 from '../assets/dwt/3.png';
import dwt4 from '../assets/dwt/4.png';
import dwt5 from '../assets/dwt/5.png';

// Données des projets (tags et captures)
const projectsData = {
  'zink-project': {
    tags: ['JavaScript', 'Full-stack', '3D'],
    images: [zink1, zink2, zink3, zink4, zink5, zink6]
  },
  'tech-store': {
    tags: ['HTML', 'C#', 'Framework .NET 8.0', 'SQL Server', 'E-commerce'],
    images: [tech1, tech2, tech3, tech4, tech5]
  },
  'seccc-project': {
    tags: ['JavaScript', 'Web'],
    images: [seccc1, seccc2, seccc3, seccc4, seccc5],
    liveUrl: 'https://seccc-tunisie.netlify.app'
  },
  'css-store': {
    tags: ['E-commerce', 'Web', 'JavaScript'],
    images: [css1, css2, css3, css4, css5]
  },
  'dwt-project': {
    tags: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    images: [dwt1, dwt2, dwt3, dwt4, dwt5]
  } 
};

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const project = projectsData[id] || { tags: [], images: [] };

  const features = Array.from({ length: 15 }, (_, i) => 
    t(`projects.items.${id}.f${i + 1}`, { defaultValue: '' })
  ).filter(Boolean);

  return (
    <div className="project-details-page container">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        {t('projects.back')}
      </Link>
      
      <div className="project-details-content">
        <div>
          <div className="project-details-header">
            <h1 className="project-details-title">{t(`projects.items.${id}.title`)}</h1>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <p className="hero-description" style={{ marginBottom: '1.5rem' }}>
            {t(`projects.items.${id}.desc`)}
          </p>

          {project.liveUrl && (
            <div style={{ marginBottom: '2rem' }}>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
              >
                <ExternalLink size={18} />
                {t('projects.visitSite', { defaultValue: 'Consulter le site en direct' })}
              </a>
            </div>
          )}
          
          {features.length > 0 && (
            <>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{t('projects.features')}</h2>
              <div className="feature-list">
                {features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <Check className="feature-icon" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        
        <div>
          {project.images[0] && (
            <img 
              src={project.images[0]} 
              alt={t(`projects.items.${id}.title`)} 
              className="project-main-image" 
            />
          )}
        </div>
      </div>
      
      {project.images.length > 0 && (
        <>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{t('projects.screenshots')}</h2>
          <div className="screenshots-gallery">
            {project.images.map((img, idx) => (
              <img key={idx} src={img} alt={`Capture ${idx + 1}`} className="screenshot-item" />
            ))}
          </div>
        </>
      )}
    </div>
  );
}