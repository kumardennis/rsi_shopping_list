import React from "react";
import HeroCarousel from "Components/HeroCarousel/HeroCarousel";
import OfferBanners from "Containers/OfferBanners/OfferBanners";

const LandingPage = (): JSX.Element => {
  return (
    <>
      <HeroCarousel />
      <OfferBanners />
    </>
  );
};

export default LandingPage;
