import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import Card from "../Card/Card";
import { useQuery } from "react-query";

const FeaturedMovies = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?" +
    process.env.REACT_APP_API_KEY;

  const { data } = useQuery(["featuredMovie"], async () => {
    const data = await (await fetch(`${API_URL}`)).json();
    return data;
  });

  return (
    <Category header="Featured Movie">
      <HorizontalSlider>
        {data?.results?.map(({ title, poster_path, vote_average, id }) => (
          <Card
            title={title}
            img={poster_path}
            rating={vote_average}
            key={id}
            id={id}
          />
        ))}
      </HorizontalSlider>
    </Category>
  );
};

export default FeaturedMovies;
