import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Home.scss"; // Import the SCSS file for styling

function Banner() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDonateClick = () => {
    navigate("/donate"); // Navigate to the Donate page
  };

  return (
    <div className="banner-section">
      <img
        src={`${process.env.PUBLIC_URL}/images/aboutImg/main.jpeg`} // Adjust the path to your image
        alt="banner"
        className="banner-image"
      />
      <div className="banner-text">
        <p className="banner-title">ABLE</p>
        <p className="banner-subTitle">
          Promote Equality For Women With Disability
        </p>
        <button className="read-more-button" onClick={handleDonateClick}>
          Donate Now...
        </button>
      </div>
    </div>
  );
}

export default Banner;
