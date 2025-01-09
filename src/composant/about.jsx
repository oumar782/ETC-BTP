import React from 'react';
import { CheckCircle } from 'lucide-react';
import "./About.css"; 

const About = () => {
  const values = [
    "Innovation Durable",
    "Expertise Multidisciplinaire",
    "Engagement Client",
    "Excellence Technique"
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="grid">
          <div className="text-section">
            <h2 className="title">
              À Propos d'Etc-btp
            </h2>
            <p className="descriptions">
              Etc-btp est une entreprise leader en ingénierie multi-sectorielle, 
              offrant des solutions innovantes et durables dans les domaines rural, 
              industriel, commercial et civil. Notre approche intégrée et notre expertise 
              diversifiée nous permettent de répondre aux défis les plus complexes.
            </p>
            <div className="values">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <CheckCircle className="icon" />
                  <span className="value-text">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="image-section">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Engineering team"
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
