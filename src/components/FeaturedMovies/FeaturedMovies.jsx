import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import Card from "../Card/Card";
import { useQuery } from "react-query";

const FeaturedMovies = () => {
  const API_URL =
    "https://api.themoviedb.org/3" +
    "/movie/popular?" +
    process.env.REACT_APP_API_KEY;

  const { data } = useQuery(["data"], async () => {
    const data = await (await fetch(`${API_URL}`)).json();
    return data;
  });

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
