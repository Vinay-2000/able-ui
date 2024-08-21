import React from "react";
import "./Home.scss"; // Import the SCSS file for styling

function Banner() {
  return (
    <div className="banner-section">
      <img
        src="images/aboutImg/main.jpeg" // Adjust the path to your image
        alt="banner"
        className="banner-image"
      />
      <div className="banner-text">
        <h1>Your Text Here</h1>
      </div>
    </div>
  );
}

export default Banner;
