import React from "react";
import Card from "../Card/Card";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";

const MovieCards = () => {
  return (
    <HorizontalSlider>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </HorizontalSlider>
  );
};

export default MovieCards;
