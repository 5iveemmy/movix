import React from "react";
import * as S from "./Category.styles";
import MovieCards from "../MovieCards/MovieCards";

const Category = ({ header }) => {
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

export default Category;
