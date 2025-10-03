import React from "react";
import HeroSection from "../components/Hero";
import ManagSystems from "../components/ManagSystems";
import StatsSection from "../components/Stats";
import ConnectivitySection from "../components/Connectivity";
import Features from "../components/Features";
import AppImagesCarousel from "../components/AppImgs";
import DownloadApp from "../components/DownloadApp";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ILMWasooli - Free School Management Software</title>
        <meta
          name="description"
          content="ILMWasooli is the fastest growing free forever school management software for up to 50 students. Manage your school with ease using web and mobile platforms."
        />
        <meta
          name="keywords"
          content="school management software, free school software, ILMWasooli, school portal, education management"
        />
        <meta name="author" content="ILMWasooli Team" />
      </Helmet>
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
