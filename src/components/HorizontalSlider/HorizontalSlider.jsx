import React, { useEffect, useState } from "react";
import * as S from "./HorizontalSlider.styles";

const HorizontalSlider = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(children?.length);

  useEffect(() => {
    setLength(children?.length);
  }, [children]);

  const prev = () => {
    if (current > 0) {
      setCurrent((prevState) => prevState - 1);
    }
  };

  const next = () => {
    if (current < length - 4) {
      setCurrent((prevState) => prevState + 1);
    }
  };

  return (
    <S.HorizontalSliderContainer>
      <S.StyledBackArrow onClick={prev} />
      <S.HorizontalSliderWrapper>
        <S.HorizontalSliderItems current={current}>
          {children}
        </S.HorizontalSliderItems>
      </S.HorizontalSliderWrapper>
      <S.StyledForwardArrow onClick={next} />
    </S.HorizontalSliderContainer>
  );
};

export default HorizontalSlider;
