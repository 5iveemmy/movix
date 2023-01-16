import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import Card from "../Card/Card";
import { useQuery } from "react-query";

const NewArrival = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=61dab464da90e05f4f4c3a6362670387";

  const { data } = useQuery(["newArrival"], async () => {
    const data = await (await fetch(`${API_URL}`)).json();
    return data;
  });

  return (
    <Category header="New Arrival">
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

export default NewArrival;
