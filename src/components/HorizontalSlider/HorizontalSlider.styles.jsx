import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

export const HorizontalSliderContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* flex-direction: column; */
  align-items: center;
  gap: 34px;
  isolation: isolate;
  padding-top: 44px;
`;

export const HorizontalSliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const HorizontalSliderItems = styled.div`
  display: flex;
  gap: 0 5.5%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${(p) => p.current * (102.5 / 4)}%);

  & > * {
    width: calc((100% - 18%) / 4);
    min-width: calc((100% - 18%) / 4);
  }

  @media screen and (max-width: 600px) {
    transform: translateX(-${(p) => p.current * 102.5}%);

    & > * {
      width: 100%;
      min-width: 100%;
    }
  }
`;

export const StyledForwardArrow = styled(IoIosArrowForward)`
  font-size: 28px;
  cursor: pointer;
  color: #6b7280;
`;

export const StyledBackArrow = styled(IoIosArrowBack)`
  font-size: 28px;
  cursor: pointer;
  color: #6b7280;
`;
