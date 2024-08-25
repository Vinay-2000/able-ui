import React, { useState, useEffect } from "react";
import "./Home.scss";

const ContactUs: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const image = new Image();
    image.src = "/images/aboutImg/backImage.png";

    image.onload = () => {
      setBackgroundImage(`url(${image.src})`);
    };
  }, []);

  return (
    <div className="contact-us-container" style={{ backgroundImage }}>
      <div className="contact-title">
        <h1>Contact Us</h1>
        <br />
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="First Name and Last Name"
            id="name"
            name="name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Your 10-digit Mobile Number"
            id="email"
            name="email"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="Your E-mail Address"
            id="phone"
            name="phone"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Leave us your message here..."
            name="message"
            rows={5}
            required
          ></textarea>

          <button className="read-more-button">Send Message...</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
