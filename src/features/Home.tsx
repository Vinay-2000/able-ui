import React from "react";
import About from "./About";
import StatisticsSection from "./StatisticsSection";
import MyNavbar from "./Navbar";
import Banner from "./Banner";
import ContactUs from "./Contact";
function Home() {
  return (
    <div>
      <MyNavbar />
      <Banner />
      <About />
      <StatisticsSection />
      <ContactUs />
    </div>
  );
}

export default Home;
