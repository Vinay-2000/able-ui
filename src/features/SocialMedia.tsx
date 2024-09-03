import React from "react";
import "./Home.scss";

const SocialMediaPage: React.FC = () => {
  // Using a hook to dynamically set the background image
  const backgroundImage = "url('/images/aboutImg/home-banner-image.png')"; // Replace with your image path

  return (
    <div className="social-media-container">
      <div
        className="background-image"
        style={{ backgroundImage: backgroundImage}}
      >
        <div className="overlay">
          <h1 className="title">Connect With Us</h1>
          <div className="social-icons">
            {/* Social media logos remain in color */}
            <img
              src="images/aboutImg/facebook.png"
              alt="Facebook"
              className="social-icon"
            />
            <img
              src="images/aboutImg/instagram.png"
              alt="Instagram"
              className="social-icon"
            />
            <img
              src="images/aboutImg/linkedin.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#cookie">Cookie Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
        <div className="footer-text">
          <p>Copyright 2024 Accenture. All rights reserved. Accenture Confidential. For internal use only.</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPage;
