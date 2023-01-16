import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    padding-top: 12px;
  }
`;

export const SearchContainer = styled.div`
  width: 36.45%;
  position: relative;
`;

export const StyledSearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  right: 9px;
  top: 25%;
  color: #d1d5db;
`;

export const Input = styled.input`
  padding: 6px 10px;
  width: 100%;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  color: #f7f7f7;
  background: none;

  &::placeholder {
    color: #d1d5db;
  }
`;

export const Image = styled.img``;

export const Movix = styled.h1`
  font-weight: 700;
  line-height: 24px;
  font-size: 24px;
  color: #f7f7f7;
`;

export const Name = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #f7f7f7;
`;

export const MoviesListDiv = styled.div`
  background-color: #be123c;
  position: absolute;
  width: 100%;
  top: 40px;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

export const MoviesList = styled.p`
  padding: 2.5px 0px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  position: absolute;
  background-color: #be123c;
  border: none;
  right: 0;
  top: 50px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;
