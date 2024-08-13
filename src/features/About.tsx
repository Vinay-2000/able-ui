import React, { useEffect, useState, useRef } from 'react';
import './About.css';

interface CounterProps {
  end: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration }) => {
  const [count, setCount] = useState<number>(0);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const startCounting = () => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.ceil(start));
      }, 10);
    };

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startCounting();
        observer.disconnect(); // Stop observing once counting starts
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <div ref={counterRef} className="counter">
      <span>{count}</span>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="main-content">
        <div className="image-container">
          <img src="/images/aboutImg/gallery5.jpg" alt="Round" className="round-image" />
        </div>
        <div className="text-content">
          <h1 className="title">About Us</h1>
          <h2 className="subtitle">Promote Equality For Women With Disability</h2>
          <p className="description">
            Rehabilitation Aids Workshop by Women with Disability (RAWWD) was founded in 1997 as an 
            offshoot of Mobility India, one of the largest NGOs in India focused on providing aids for people with physical 
            disabilities. RAWWD was established with the sole aim of assisting and encouraging women with disabilities to set 
            up and run workshops that produce quality...
          </p>
          <button className="read-more-button">Read More...</button><br />
        </div>
      </div>
      <div className="boxes-container">
        <div className="box">
          <img src="/images/aboutImg/compaigns.png" alt="Logo 1" className="logo" />
          <p className="box-num"><Counter end={2348} duration={2000} /></p>
          <p className="box-text">Total Campaigns</p><br />
        </div>
        <div className="box">
          <img src="/images/aboutImg/Donors.png" alt="Logo 2" className="logo" />
          <p className="box-num"><Counter end={1785} duration={2000} /></p>
          <p className="box-text">Satisfied Donors</p>
        </div>
        <div className="box">
          <img src="/images/aboutImg/RaisingGraph.png" alt="Logo 3" className="logo" />
          <p className="box-num"><Counter end={4287} duration={2000} /></p>
          <p className="box-text">Funds Raised</p>
        </div>
        <div className="box">
          <img src="/images/aboutImg/Volunteers.png" alt="Logo 4" className="logo" />
          <p className="box-num"><Counter end={1294} duration={2000} /></p>
          <p className="box-text">Happy Volunteers</p>
        </div>
      </div>
    </div>
  );
};

export default About;
