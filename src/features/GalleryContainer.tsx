import React from "react";
import "./Home.scss"; // Import your CSS file

const Gallery = () => {
  const images = [
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery1.jpg`,
      alt: "Image 1",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery2.jpg`,
      alt: "Image 2",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery3.jpg`,
      alt: "Image 3",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery4.jpg`,
      alt: "Image 4",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery5.jpg`,
      alt: "Image 5",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery6.jpg`,
      alt: "Image 6",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery7.jpg`,
      alt: "Image 7",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery8.jpg`,
      alt: "Image 8",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery9.jpg`,
      alt: "Image 9",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery10.jpg`,
      alt: "Image 10",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery11.jpg`,
      alt: "Image 11",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery12.jpg`,
      alt: "Image 12",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery13.jpg`,
      alt: "Image 13",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/galleryImages/gallery14.png`,
      alt: "Image 14",
    },
  ];
  return (
    <>
      <div className="gallery-info">
        <h2 className="gallery-info-title">Our Gallery</h2>
        <p className="gallery-info-subtitle">
          A peek into the ABLE workshop and a glimpse of a day in the life of
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
