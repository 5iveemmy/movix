import React from "react";
import * as S from "./FeaturedMovies.styles";
import MovieCards from "../MovieCards/MovieCards";

const FeaturedMovies = () => {
  return (
    <S.Container>
      <S.HeaderDiv>
        <S.HeaderText>Featured Movie</S.HeaderText>
        <S.SeeMoreDiv>
          <S.SeeMore>See more</S.SeeMore>
          <S.StyledArrow />
        </S.SeeMoreDiv>
      </S.HeaderDiv>
      <MovieCards />
    </S.Container>
  );
};

export default FeaturedMovies;
