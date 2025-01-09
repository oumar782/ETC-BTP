import React from 'react';
import { Building2, Facebook, Twitter, Linkedin } from 'lucide-react';
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <Building2 className="brand-icon" />
              <span className="brand-name">Etc-btp</span>
            </div>
            <p className="description">
              Solutions innovantes en ingénierie multi-sectorielle
            </p>
          </div>

          <div>
            <h3 className="section-title">Services</h3>
            <ul className="footer-links">
              <li>Ingénierie Rurale</li>
              <li>Ingénierie Industrielle</li>
              <li>Ingénierie Commerciale</li>
              <li>Ingénierie Civile</li>
            </ul>
          </div>

          <div>
            <h3 className="section-title">Liens Rapides</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Accueil</a></li>
              <li><a href="#about" className="footer-link">À Propos</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="section-title">Suivez-nous</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <Facebook className="social-icon-img" />
              </a>
              <a href="#" className="social-icon">
                <Twitter className="social-icon-img" />
              </a>
              <a href="#" className="social-icon">
                <Linkedin className="social-icon-img" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Etc-btp. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
