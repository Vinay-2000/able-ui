import React from "react";
import "./Home.scss"; // Import the SCSS file for styling

function Banner() {
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
        <button className="read-more-button">Donate Now...</button>
      </div>
    </div>
  );
}

export default Banner;
