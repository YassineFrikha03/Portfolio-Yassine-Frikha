import { useState } from 'react';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoYF from '../assets/logo sans YF.png';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="nav-brand" onClick={closeMobileMenu}>
            <img src={logoYF} alt="Yassine Frikha" className="nav-logo" style={{ filter: 'var(--filter-invert)' }} />
          </Link>
        </div>
        
        <div className={`navbar-center ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/#accueil" className="nav-link" onClick={closeMobileMenu}>{t('navbar.home')}</a>
          <a href="/#apropos" className="nav-link" onClick={closeMobileMenu}>{t('navbar.about')}</a>
          <a href="/#projets" className="nav-link" onClick={closeMobileMenu}>{t('navbar.projects')}</a>
          <a href="/#competences" className="nav-link" onClick={closeMobileMenu}>{t('navbar.skills')}</a>
          <a href="/#contact" className="nav-link" onClick={closeMobileMenu}>{t('navbar.contact')}</a>
        </div>

        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleLanguage} aria-label="Toggle language" style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.05rem', fontWeight: '500' }}>
            <Globe size={18} />
            {i18n.language === 'fr' ? 'FR' : 'EN'}
          </button>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="mobile-backdrop" onClick={closeMobileMenu}></div>
      )}
    </>
  );
}