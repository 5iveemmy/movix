import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import Card from "../Card/Card";

const FeaturedMovies = () => {
  return (
    <Category header="Featured Movie">
      <HorizontalSlider>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HorizontalSlider>
    </Category>
  );
};

export default FeaturedMovies;
