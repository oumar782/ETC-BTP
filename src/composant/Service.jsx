import React from 'react';
import { Factory, Building, Tractor, HardHat } from 'lucide-react';
import "./service.css"; // Assurez-vous que le chemin est correct

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="service-card">
    <div className="icon-container">
      <Icon className="icon" />
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const ServicesSection = () => (
  <section className="services-section">
    <div className="container">
      <h2 className="section-titles">Nos Services</h2>
      <div className="services-grid">
        <ServiceCard
          icon={Factory}
          title="Ingenierie rurale"
          description="nous offrons des services d'ingénierie rurale de haute qualité, visant à améliorer les infrastructures et la gestion des ressources dans les zones rurales. Nos solutions comprennent la construction de routes, l'aménagement des terrains agricoles, et l'optimisation des réseaux d'irrigation, contribuant ainsi au développement durable des communautés rurales."
        />
        <ServiceCard
          icon={Building}
          title="ingenierie civil"
          description="ous proposons des services d'ingénierie civile couvrant l'ensemble des aspects de la construction et de la gestion des infrastructures. Notre expertise inclut la conception et la réalisation de bâtiments, ponts, routes et réseaux d'assainissement, avec un engagement constant envers la qualité, la sécurité et la durabilité. Nous travaillons en étroite collaboration avec nos clients pour fournir des solutions innovantes et adaptées à leurs besoins spécifiques."
        />
        <ServiceCard
          icon={Tractor}
          title="ingenierie industrielle"
          description="nous offrons des services d'ingénierie industrielle visant à optimiser la conception, la construction et la gestion d'installations industrielles. Notre expertise couvre la création de sites de production, d'usines, et d'infrastructures industrielles complexes, en mettant l'accent sur l'efficacité opérationnelle, la sécurité, et l'intégration de technologies de pointe. Nous accompagnons nos clients dans la mise en œuvre de solutions adaptées à leurs besoins spécifiques et à leur environnement de production.






"
        />
        <ServiceCard
          icon={HardHat}
          title="Ingenierie commerciale"
          description="nous proposons des services d'ingénierie commerciale pour accompagner nos clients dans le développement et la gestion de leurs projets. Notre équipe met en place des stratégies efficaces pour optimiser les processus commerciaux, améliorer la gestion des ventes et renforcer les relations avec les partenaires. Grâce à notre expertise, nous offrons des solutions sur mesure qui répondent aux défis du secteur du BTP, favorisant ainsi la croissance et la rentabilité des entreprises."
        />
      </div>
    </div>
  </section>
);

export default ServicesSection;