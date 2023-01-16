import React from "react";
import Category from "../Category/Category";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import * as S from "../FeaturedCasts/styles";
import will from "../../assets/images/will.svg";
import suicide from "../../assets/images/suicide.svg";
import lamb from "../../assets/images/lamb.svg";

// COULD NOT SEE FREE API TO DISPLAY THESE KIND OF VIDEOS

const exclusiveData = [
  {
    image: lamb,
    title: "Lamb(20211 Trailer",
  },
  {
    image: suicide,
    title: "The Suicide Squad: John Cena Interview",
  },
  {
    image: will,
    title: "Will there be a new era of horror movie?",
  },
];

const ExclusiveVideos = () => {
  return (
    <Category header="Exclusive Videos">
      <HorizontalSlider>
        {exclusiveData.map(({ image, title }) => (
          <S.Container exclusive>
            <div>
              <S.Image src={image} alt="" />
            </div>
            <S.Name>{title}</S.Name>
          </S.Container>
        ))}
      </HorizontalSlider>
    </Category>
  );
};

export default ExclusiveVideos;
