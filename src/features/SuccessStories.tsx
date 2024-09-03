import React from 'react';
import './Home.scss';

interface Story {
  image: string;
  info: string;
  time: string;
  date: string;
}

const SuccessStories: React.FC = () => {
  const stories: Story[] = [
    {
      image: '/images/galleryImages/gallery14.png',
      info: 'ABLE has provided 40,000 differently-abled people with prosthetics and supporting devices',
      time: '1 min read',
      date: 'July 16 2024',
    },
    {
      image: '/images/galleryImages/gallery1.jpg',
      info: 'ABLE has provided 40,000 differently-abled people with prosthetics and supporting devices',
      time: '1 min read',
      date: 'July 16 2024',
    },
    {
      image: '/images/galleryImages/gallery4.jpg',
      info: 'ABLE has provided 40,000 differently-abled people with prosthetics and supporting devices',
      time: '1 min read',
      date: 'July 16 2024',
    },
    {
      image: '/images/galleryImages/gallery7.jpg',
      info: 'ABLE has provided 40,000 differently-abled people with prosthetics and supporting devices',
      time: '1 min read',
      date: 'July 16 2024',
    },
  ];

  return (
    <div className="success-stories">
      <h1 className="story-title">Success Stories</h1>
      <div className="stories-container">
        {/* Main Story */}
        <div className="main-story">
          <div className="main-story-image-container">
            <img src={stories[0].image} alt="Main Story" className="main-story-image" />
            <div className="main-story-overlay">
              <p className="main-story-info">{stories[0].info}</p>
            </div>
          </div>
          <span className="main-story-time">
                    <span className="story-source">{stories[0].date}</span>
                    <span className="separator">|</span>
                    <img src="/images/aboutImg/clock.jpeg" className="clock-icon" alt="Clock icon" />
                    <span>{stories[0].time}</span>
            </span>
        </div>

        {/* Additional Stories */}
        <div className="additional-stories">
          {stories.slice(1).map((story, index) => (
            <div key={index} className="additional-story">
              <div className="story-info-container">
                <div className="story-info">
                  <span className="story-time">
                    <span className="story-source">{story.date}</span>
                    <span className="separator">|</span>
                    <img src="/images/aboutImg/clock.jpeg" className="clock-icon" alt="Clock icon" />
                    <span>{story.time}</span>
                  </span>
                  <p className="story-info-text">{story.info}</p>
                </div>
                <img src={story.image} alt={`Story ${index + 2}`} className="story-image" />
              </div>
              <hr className="separator-line" /> {/* Moved separator line below the story info */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
