import React from 'react';
import './Home.scss';

interface Service {
  logo: string;
  title: string;
  info: string;
}

const servicesData: Service[] = [
  {
    logo: '/images/aboutImg/icon1.png',
    title: 'ORTHOTIC SERVICES',
    info: 'Ankle Foot Orthosis, Knee Ankle Foot Orthosis, Hip Knee Ankle Foot Orthosis...',
  },
  {
    logo: '/images/aboutImg/icon2.png',
    title: 'PROSTHETIC SERVICES',
    info: 'Flower and Upper Limb Prosthesis-Modular and conventional.',
  },
  {
    logo: '/images/aboutImg/icon3.png',
    title: 'WALKING AIDS',
    info: 'Axillary crutches, elbow crutches, walkers, walking sticks, wheel chairs, etc',
  },
  {
    logo: '/images/aboutImg/icon4.png',
    title: 'PRE-FABRICATED ITEMS',
    info: 'Belts and braces, lumbar and sacral belts, abdominal belts, chest belts...',
  },
];

const Services: React.FC = () => {
  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <div key={index} className="service-box">
          <img src={service.logo} alt={`Logo of ${service.title}`} className="service-logo" />
          <div className="service-content">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-info">{service.info}</p>
            <button className="explore-button">Explore More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
