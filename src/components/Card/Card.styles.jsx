import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 370px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 16px;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  right: ${({ right }) => (right ? "15.58px" : "auto")};
  top: ${({ top }) => (top ? "21px" : "auto")};
`;

export const Description = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: #9ca3af;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #111827;
`;

export const Ratings = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RatingDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const RatingIcon = styled.img``;
