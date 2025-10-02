import React from "react";
import HeroSection from "../components/Hero";
import ManagSystems from "../components/ManagSystems";
import StatsSection from "../components/Stats";
import ConnectivitySection from "../components/Connectivity";
import Features from "../components/Features";
import AppImagesCarousel from "../components/AppImgs";
import DownloadApp from "../components/DownloadApp";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ManagSystems />
      <StatsSection />
      <ConnectivitySection />
      <Features />
      <AppImagesCarousel />
      <DownloadApp />
    </div>
  );
};

export default Home;
