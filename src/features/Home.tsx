import React from "react";
import About from "./About";
import StatisticsSection from "./StatisticsSection";
import MyNavbar from "./Navbar";
import Banner from "./Banner";
import ContactUs from "./Contact";
import Gallery from "./GalleryContainer";
import Services from "./Services";
import NewsBlog from "./NewsBlogData";
import Supporters from "./Supporters";
import SuccessStories from "./SuccessStories";
function Home() {
  return (
    <div>
      <MyNavbar />
      <Banner />
      <Services />
      <About />
      <StatisticsSection />
      <Gallery />
      <ContactUs />
      <Supporters />
      <NewsBlog />
      <SuccessStories />
    </div>
  );
}

export default Home;
