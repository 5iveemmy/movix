import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 3.47% 70px 3.75%;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 34px;
`;

export const HeaderText = styled.h1`
  font-size: 36px;
  padding-left: 20px;
  font-weight: 700;
  line-height: 47px;
`;

export const SeeMoreDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  color: #be123c;
`;

export const SeeMore = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

export const StyledArrow = styled(IoIosArrowForward)``;
