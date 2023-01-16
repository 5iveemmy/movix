import React from "react";
import * as S from "./Card.styles";
import tvSeries from "../../assets/images/tvSeries.svg";
import favorite from "../../assets/images/favorite.svg";
import imdb from "../../assets/images/imdb.svg";
import rottenTomatoes from "../../assets/images/rottenTomatoes.svg";
import { useQuery } from "react-query";

const Card = ({ title, img, rating, id, seasons }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=61dab464da90e05f4f4c3a6362670387`;

  const { data } = useQuery(["movieDetails"], async () => {
    const data = await (await fetch(`${MOVIE_DETAILS_URL}`)).json();
    return data;
  });

  return (
    <S.Container>
      <S.Wrapper style={{ backgroundImage: `url('${IMG_URL + img}')` }}>
        {seasons && <S.Image src={tvSeries} alt="Tv series" top />}
        <S.Image src={favorite} alt="Favourite" right />
      </S.Wrapper>
      <S.Description>
        <S.Text>USA, 2016 - Current</S.Text>
        <S.Title>{title}</S.Title>
        <S.Ratings>
          <S.RatingDiv>
            <S.RatingIcon src={imdb} alt="" />
            {rating}/ 100
          </S.RatingDiv>
          <S.RatingDiv>
            <S.RatingIcon src={rottenTomatoes} alt="" />
            97%
          </S.RatingDiv>
        </S.Ratings>
        <S.Div>
          {data?.genres?.map(({ name, id }) => (
            <S.Text key={id}>{name}</S.Text>
          ))}
        </S.Div>
      </S.Description>
    </S.Container>
  );
};

export default Card;
