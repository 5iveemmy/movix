import React from "react";
import * as S from "./MovieCards.styles";
import Card from "../Card/Card";

const MovieCards = () => {
  return (
    <S.Container>
      <S.StyledBackArrow />
      <Card />
      <Card />
      <Card />
      <Card />
      <S.StyledForwardArrow />
    </S.Container>
  );
};

export default MovieCards;
