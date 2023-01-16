import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import * as S from "./FeaturedCast.styles";
import { useQuery, useQueryClient } from "react-query";

const FeaturedCast = () => {
  const queryClient = useQueryClient();
  const queryData = queryClient.getQueryData("data");
  const movieId = queryData?.results[0]?.id;
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const API_URL =
    `https://api.themoviedb.org/3/movie/${movieId}/credits?` +
    process.env.REACT_APP_API_KEY;

  const { data } = useQuery(["casts"], async () => {
    const data = await (await fetch(`${API_URL}`)).json();
    return data;
  });

  return (
    <Category header="Featured Casts">
      <HorizontalSlider>
        {data?.cast?.map(({ name, profile_path, id }) => (
          <S.Container key={id}>
            <div>
              <S.Image src={IMG_URL + profile_path} alt="" />
            </div>
            <S.Name>{name}</S.Name>
          </S.Container>
        ))}
      </HorizontalSlider>
    </Category>
  );
};

export default FeaturedCast;
