import React, { useState } from "react";
import "./Home.scss"; // Make sure to create this file for styling

const newsBlogData = [
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery10.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, bsvkjf bvkjdfv hejbvk jdfvk quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "4",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery5.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis dkjbvjkvk fvkbjfkdbv bjfvkjbfdj kvbfjkvfjkb vakjlb vnostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "2",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery4.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, jhebvh jdfbvkjdb vkjabdv jkbsvjkb quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "3",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery6.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "9",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery10.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "1",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery3.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "1",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}//images/galleryImages/gallery1.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "6",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery12.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "5",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery13.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "2",
  },
  {
    title: "Deftly aiding disability",
    image: `${process.env.PUBLIC_URL}/images/galleryImages/gallery14.jpg`,
    information: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut...",
    comments: "12",
  },

];

const NewsBlog: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(9); // Initially show 9 items (3 rows * 3 columns)

  const handleSeeMore = () => {
    setVisibleItems((prevItems) => prevItems + 9); // Load 9 more items when "See More" is clicked
  };

  return (
    <div>
      <div className="News-title">
        <h1>News And Blog</h1>
      </div>
      <div className="news-blog-container">
        {newsBlogData.slice(0, visibleItems).map((item, index) => (
          <div className="blog-wrapper" key={index}>
            <div className="news-blog-item">
              <h3 className="news-blog-title">{item.title}</h3>
              <img src={item.image} alt={item.title} className="news-blog-image" />
              <p className="news-blog-info">{item.information}</p>
              <div className="news-blog-comment">
                <span className="news-source">Bangalore Mirror</span>
                <span className="separator">|</span>
                <span className="news-time">
                  <img src={`${process.env.PUBLIC_URL}/images/aboutImg/clock.jpeg`} className="clock-icon" alt="Clock icon" />
                  <span>1 min read</span>
                </span>
                <span className="separator">|</span>
                <span className="comment-time">
                  <img src={`${process.env.PUBLIC_URL}/images/aboutImg/comment.jpeg`} className="comment-icon" alt="Comment icon" />
                  <span>{item.comments}</span>
                </span>
              </div>
              <hr className="news-divider" />
            </div>
          </div>
        ))}
          
      </div>
      <button onClick={handleSeeMore} className="see-more-button">
            See More...
          </button>
    </div>
  );
};

export default NewsBlog;
