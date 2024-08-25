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
        <p className="banner-title">
          Rehabilitation Aids Workshop By Women With <br />
          Disability
        </p>
        <p className="banner-subTitle">
          Promote Equality For Women With Disability
        </p>
        <button className="read-more-button">Donate Now...</button>
      </div>
    </div>
  );
}

export default Banner;
