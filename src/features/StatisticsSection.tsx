import React, { useState, useRef, useEffect } from "react";
import "./Home.scss";
//import { FaBullhorn, FaSmile, FaChartLine, FaHeart } from "react-icons/fa";

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
    <div ref={counterRef} className="statistics-counter">
      <span>{count}</span>
    </div>
  );
};

const StatisticsSection: React.FC = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-box">
        <img
          src="/images/aboutImg/compaigns.png"
          alt="Logo 1"
          className="logo"
        />
        <Counter end={2348} duration={2000} />
        <p className="statistics-description">Total campaigns</p>
      </div>
      <div className="statistics-box">
        <img src="/images/aboutImg/Donors.png" alt="Logo 2" className="logo" />
        <Counter end={1785} duration={2000} />
        <p className="statistics-description">Satisfied donors</p>
      </div>
      <div className="statistics-box">
        <img
          src="/images/aboutImg/RaisingGraph.png"
          alt="Logo 3"
          className="logo"
        />
        <Counter end={4287} duration={2000} />
        <p className="statistics-description">Fund raised</p>
      </div>
      <div className="statistics-box">
        <img
          src="/images/aboutImg/Volunteers.png"
          alt="Logo 4"
          className="logo"
        />{" "}
        <Counter end={1294} duration={2000} />
        <p className="statistics-description">Happy volunteers</p>
      </div>
    </div>
  );
};

export default StatisticsSection;
