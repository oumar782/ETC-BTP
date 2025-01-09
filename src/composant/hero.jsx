import React, { useState, useEffect } from "react";
import "./Hero.css"; 
import myvideo from '../assets/video/Design sans titre.mp4';
import rural from '../assets/image/1.png';
import rurale from '../assets/image/2.png';
import rurales from '../assets/image/3.png';
import ruraless from '../assets/image/4.png';

const Hero = () => {
  const phrases = [
    "Excellence en Ingénierie Multi-Sectorielle",
    "Solutions Innovantes pour vos Projets",
    "Optimisation et Gestion en Temps Réel",
    "Transformez vos idées en réalisations",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); // Changement toutes les 3 secondes
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section id="home" className="hero-section">
      {/* Vidéo de fond */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={myvideo} type="video/mp4" />
        {/* Add additional formats if available */}
        <source src type="video/webm" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Contenu principal */}
      <div className="hero-content">
        <h1 className="hero-title">{phrases[currentPhrase]}</h1>
        <p className="hero-subtitle">
          Solutions innovantes en ingénierie rurale, industrielle, commerciale et civile
        </p>
        <a href="#contact" className="hero-button">
          Contactez-nous
        </a>

        {/* Images rotatives */}
        <div className="image-container">
          <img
            src={rural} // Update this if you have different images
            alt="Ingénierie Rurale"
            className="rotating-image"
          />
          <img
            src={rurale} // Update this if you have different images
            alt="Ingénierie Industrielle"
            className="rotating-image"
          />
          <img
            src={rurales} // Update this if you have different images
            alt="Ingénierie Commerciale"
            className="rotating-image"
          />
          <img
            src={ruraless} // Update this if you have different images
            alt="Ingénierie Civile"
            className="rotating-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;