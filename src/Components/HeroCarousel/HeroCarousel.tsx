import React from "react";
import { Carousel } from "antd";
import "./styles.scss";

const HeroCarousel = (): JSX.Element => {
  return (
    <Carousel>
      <div className="hero-image hero-image-1" />
      <div className="hero-image hero-image-2" />
    </Carousel>
  );
};

export default HeroCarousel;
