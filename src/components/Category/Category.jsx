import React from "react";
import * as S from "./Category.styles";

const Category = ({ header, children }) => {
  return (
    <S.Container>
      <S.HeaderDiv>
        <S.HeaderText>{header}</S.HeaderText>
        <S.SeeMoreDiv>
          <S.SeeMore>See more</S.SeeMore>
          <S.StyledArrow />
        </S.SeeMoreDiv>
      </S.HeaderDiv>
      {children}
    </S.Container>
  );
};

export default Category;
