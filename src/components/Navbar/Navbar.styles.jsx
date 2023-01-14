import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const Div = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
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
