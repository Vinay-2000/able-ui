import React from "react";
import "./Home.scss";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="main-content">
        <div className="image-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/aboutImg/gallery5.jpg`}
            alt="image"
            className="round-image"
          />
        </div>
        <div className="text-content">
          <h1 className="title">About Us</h1>
          <h2 className="subtitle">
            Promote Equality For Women With Disability
          </h2>
          <p className="description">
            ABLE was founded in 1997 as an offshoot of Mobility India, one of
            the largest NGOs in India focused on providing aids for people with
            physical disabilities. ABLE was established with the sole aim of
            assisting and encouraging women with disabilities to set up and run
            workshops that produce quality...
          </p>
          <button className="read-more-button">Read More...</button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
