import React, { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const menuItems = document.querySelectorAll('.menu-item');
      const logoText = document.querySelector('.logo-text');

      if (window.scrollY > 50) { // Adjust the scroll threshold if necessary
        header.classList.add('transparent');
        menuItems.forEach(item => item.classList.add('transparent'));
        logoText.classList.add('transparent');
      } else {
        header.classList.remove('transparent');
        menuItems.forEach(item => item.classList.remove('transparent'));
        logoText.classList.remove('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The effect runs only once when the component mounts

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">
            <Building2 className="logo-icon" />
            <span className="logo-text">Etc-btp</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#home" className="menu-item">Accueil</a>
            <a href="#about" className="menu-item">À Propos</a>
            <a href="#services" className="menu-item">Services</a>
            <a href="#projects" className="menu-item">Réalisations</a>
            <a href="#contact" className="menusss">Contactez-nous !</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" className="menu-item">Accueil</a>
            <a href="#about" className="menu-item">À Propos</a>
            <a href="#services" className="menu-item">Services</a>
            <a href="#projects" className="menu-item">Réalisations</a>
            <a href="#contact" className="menu-item">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;