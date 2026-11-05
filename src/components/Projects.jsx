import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import seccclogo from '../assets/seccc/image.png';
import zink1 from '../assets/zink/1.png';
import tech1 from '../assets/tech/1.jpg';
import csslogo from '../assets/CSS store/image.png';
import dwtlogo from '../assets/dwt/logo dwt.png';

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('Tous');
  
  const filtersMap = {
    'Tous': t('projects.filters.all'),
    'Web': t('projects.filters.web'),
    'Java': t('projects.filters.java'),
    'React/Node': t('projects.filters.reactnode'),
    'Autres': t('projects.filters.other')
  };
  
  const filters = ['Tous', 'Web', 'Java', 'React/Node', 'C#', 'Autres'];
  
  const projects = [
    {
      id: 'zink-project',
      title: t('projects.items.zink-project.title'),
      desc: t('projects.items.zink-project.desc'),
      image: zink1,
      tags: ['JavaScript', 'Full-stack', '3D'],
      category: 'Web'
    },

    {
      id: 'tech-store',
      title: t('projects.items.tech-store.title'),
      desc: t('projects.items.tech-store.desc'),
      image: tech1,
      tags: ['HTML','C#','Framework .NET 8.0','SQL Server','E-commerce'],
      category: 'C#'
    },
    {
      id: 'seccc-project',
      title: t('projects.items.seccc-project.title'),
      desc: t('projects.items.seccc-project.desc'),
      image: seccclogo,
      tags: ['JavaScript', 'Web'],
      category: 'Web',
      imageFit: 'contain'
    },
    {
      id: 'css-store',
      title: t('projects.items.css-store.title'),
      desc: t('projects.items.css-store.desc'),
      image: csslogo,
      tags: ['E-commerce', 'Web', 'JavaScript'],
      category: 'Web',
      imageFit: 'contain'
    },
    {
      id: 'dwt-project',
      title: t('projects.items.dwt-project.title'),
      desc: t('projects.items.dwt-project.desc'),
      image: dwtlogo,
      tags: ['HTML', 'REACT', 'JAVASCRIPT', 'CSS'],
      category: 'React/Node',
      imageFit: 'contain'
    }
  ];

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="container">
      <div className="projects-header">
        <span className="section-subtitle">{t('projects.subtitle')}</span>
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="section-description">
          {t('projects.description')}
        </p>
        
        <div className="filters">
          {filters.map(f => (
            <button 
              key={f} 
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {filtersMap[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-3">
        {filteredProjects.map(project => (
          <Link to={`/project/${project.id}`} key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className={`project-image ${project.imageFit === 'contain' ? 'project-image-contain' : ''}`} 
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}