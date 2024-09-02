import React from 'react';
import './Home.scss'; // Assuming you'll write the CSS here

// Step 1: Create an array of supporters
const supporters = [
  { logo: '/images/aboutImg/acn_logo.png', name: 'Accenture' },
  { logo: '/images/aboutImg/Cheshire.png', name: 'Cheshire Homes for providing start-up space' },
  { logo: '/images/aboutImg/mobility.png', name: 'Mobility India' },
  { logo: '/images/aboutImg/image.png', name: 'MIBLOU for standing the project' },
  { logo: '/images/aboutImg/ddp.png', name: 'Disability Development Partners for renovationg workshop, providing new machines and partial running costs for a year' },
  { logo: '/images/aboutImg/vatech.jpg', name: 'VA-Tech for renovating the office' },
];

const Supporters: React.FC = () => {
  return (
    <div className="supporters-page">
      <h1 className="supporters-title">Our Supporters</h1>
      <p className="supporters-info">
        As a Voluntary organization RAWWD is solely dependent on funds and support from individuals and the corporate sector.
      </p>

      <div className="supporters-container">
        {supporters.map((supporter, index) => (
          <div className="supporter-box" key={index}>
            <img src={supporter.logo} alt={`${supporter.name} Logo`} className="supporter-logo" />
            <p className="supporter-name">{supporter.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supporters;
