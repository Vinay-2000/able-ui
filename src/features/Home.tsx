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
import SocialMediaPage from "./SocialMedia";
import { Route, Routes } from "react-router-dom";
import Donate from "./Donate";
import AboutUs from "./AboutUs";
function Home() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route
          path="/able-ui"
          element={
            <>
              <Banner />
              <Services />
              <About />
              <StatisticsSection />
              <ContactUs />
              <Supporters />
              <NewsBlog />
              <SuccessStories />
              <SocialMediaPage />
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default Home;
