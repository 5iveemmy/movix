import React from "react";
import * as S from "./Card.styles";
import strange from "../../assets/images/strange.svg";
import tvSeries from "../../assets/images/tvSeries.svg";
import favorite from "../../assets/images/favorite.svg";
import imdb from "../../assets/images/imdb.svg";
import rottenTomatoes from "../../assets/images/rottenTomatoes.svg";

const Card = () => {
  return (
    <S.Container>
      <S.Wrapper style={{ backgroundImage: `url('${strange}')` }}>
        <S.Image src={tvSeries} alt="Tv series" top />
        <S.Image src={favorite} alt="Favourite" right />
      </S.Wrapper>
      <S.Description>
        <S.Text>USA, 2016 - Current</S.Text>
        <S.Title>Stranger Things</S.Title>
        <S.Ratings>
          <S.RatingDiv>
            <S.RatingIcon src={imdb} alt="" />
            86.0 / 100
          </S.RatingDiv>
          <S.RatingDiv>
            <S.RatingIcon src={rottenTomatoes} alt="" />
            97%
          </S.RatingDiv>
        </S.Ratings>
        <S.Text>Action, Adventure, Horror</S.Text>
      </S.Description>
    </S.Container>
  );
};

export default Card;
