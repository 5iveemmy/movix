import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import Card from "../Card/Card";

const NewArrival = () => {
  return (
    <Category header="New Arrival">
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

export default NewArrival;
