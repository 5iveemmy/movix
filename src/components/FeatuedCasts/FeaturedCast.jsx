import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import keanu from "../../assets/images/keanu.svg";
import * as S from "./FeaturedCast.styles";

const FeaturedCast = () => {
  return (
    <Category header="Featured Casts">
      <HorizontalSlider>
        <S.Container>
          <S.Image src={keanu} alt="" />
          <S.Name>Keanu Reeves</S.Name>
        </S.Container>
        <S.Container>
          <S.Image src={keanu} alt="" />
          <S.Name>Keanu Reeves</S.Name>
        </S.Container>
        <S.Container>
          <S.Image src={keanu} alt="" />
          <S.Name>Keanu Reeves</S.Name>
        </S.Container>
        <S.Container>
          <S.Image src={keanu} alt="" />
          <S.Name>Keanu Reeves</S.Name>
        </S.Container>
      </HorizontalSlider>
    </Category>
  );
};

export default FeaturedCast;
