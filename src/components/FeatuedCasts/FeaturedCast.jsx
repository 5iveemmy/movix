import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import Card from "../Card/Card";

const FeaturedCast = () => {
  return (
    <Category header="Featured Casts">
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

export default FeaturedCast;
