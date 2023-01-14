import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 44px;
`;

export const StyledForwardArrow = styled(IoIosArrowForward)`
  font-size: 28px;
  color: #6b7280;
`;

export const StyledBackArrow = styled(IoIosArrowBack)`
  font-size: 28px;
  color: #6b7280;
`;
