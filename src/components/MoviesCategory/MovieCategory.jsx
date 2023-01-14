import React from "react";
import * as S from "./MovieCategory.styles";
import MovieCards from "../MovieCards/MovieCards";

const MovieCategory = ({ header }) => {
  return (
    <S.Container>
      <S.HeaderDiv>
        <S.HeaderText>{header}</S.HeaderText>
        <S.SeeMoreDiv>
          <S.SeeMore>See more</S.SeeMore>
          <S.StyledArrow />
        </S.SeeMoreDiv>
      </S.HeaderDiv>
      <MovieCards />
    </S.Container>
  );
};

export default MovieCategory;
