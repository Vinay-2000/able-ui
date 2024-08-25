import React from "react";
import "./Home.scss"; // Import your CSS file

const Gallery = () => {
  const images = [
    { src: "images/galleryImages/gallery1.jpg", alt: "Image 1" },
    { src: "images/galleryImages/gallery2.jpg", alt: "Image 2" },
    { src: "images/galleryImages/gallery3.jpg", alt: "Image 3" },
    { src: "images/galleryImages/gallery4.jpg", alt: "Image 4" },
    { src: "images/galleryImages/gallery5.jpg", alt: "Image 5" },
    { src: "images/galleryImages/gallery6.jpg", alt: "Image 6" },
    { src: "images/galleryImages/gallery7.jpg", alt: "Image 7" },
    { src: "images/galleryImages/gallery8.jpg", alt: "Image 8" },
    { src: "images/galleryImages/gallery9.jpg", alt: "Image 9" },
    { src: "images/galleryImages/gallery10.jpg", alt: "Image 10" },
    { src: "images/galleryImages/gallery11.jpg", alt: "Image 11" },
    { src: "images/galleryImages/gallery12.jpg", alt: "Image 12" },
    { src: "images/galleryImages/gallery13.jpg", alt: "Image 13" },
    { src: "images/galleryImages/gallery14.png", alt: "Image 14" },
  ];
  return (
    <>
      <div className="gallery-info">
        <h2 className="gallery-info-title">Our Gallery</h2>
        <p className="gallery-info-subtitle">
          A peek into the RAWWD workshop and a glimpse of a day in the life of
          our staff
        </p>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="pics">
            <img src={image.src} alt={image.alt} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
      <button className="see-more-button">See More...</button>
    </>
  );
};

export default Gallery;
