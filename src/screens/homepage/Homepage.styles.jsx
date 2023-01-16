import { IoMdPlayCircle } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  padding: 22px 6.597% 0px 4.02%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const Wrapper = styled.div`
  padding: 100px 0px 157px 0px;
`;

export const DescriptionBox = styled.div`
  width: 404px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RatingsContainer = styled.div`
  display: flex;
  gap: 34px;
`;

export const Ratings = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Image = styled.img``;

export const RateNumber = styled.p`
  color: #f7f7f7;
  font-size: 12px;
  line-height: 12px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #f7f7f7;
`;

export const MovieDescription = styled.p`
  color: #f7f7f7;
  width: 302px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
`;

export const StyledPlay = styled(IoMdPlayCircle)`
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  padding: 6px 16px;
  width: 169px;
  height: 36px;
  background-color: #be123c;
  border-radius: 6px;
  outline: none;
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: #f7f7f7;
`;
