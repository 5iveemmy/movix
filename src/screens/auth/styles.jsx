import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.form`
  margin: 292px 44.375% 221px 44.375%;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  text-align: center;
  width: 100%;
  min-width: 450px;
  padding: 55px 28px 46px 28px;
`;

export const Header = styled.div``;

export const HeaderText = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #000000;
`;

export const Image = styled.img``;

export const HeaderPara = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #747474;
`;

export const InputContainer = styled.div`
  padding: 24px 0px 32px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PasswordDiv = styled.div`
  position: relative;
`;

export const StyledEye = styled(AiOutlineEye)`
  position: absolute;
  top: 37%;
  opacity: 0.5;
  right: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 12px 16px 17px;
  border: 1px solid rgba(76, 78, 100, 0.22);
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: rgba(76, 78, 100, 0.22);
  }
`;

export const Button = styled.button`
  background-color: #000000;
  box-shadow: 0px 4px 8px -4px rgba(76, 78, 100, 0.42);
  border-radius: 8px;
  color: #f7f7f7;
  width: 100%;
  outline: none;
  border: none;
  height: 51px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const AuthFooter = styled.div`
  padding-top: 42px;
`;

export const AuthFooterPara = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #747474;
`;

export const StyledLink = styled(Link)`
  color: #b91c1c;
  cursor: pointer;
  text-decoration: none;
`;

export const Error = styled.p`
  color: #b91c1c;
  font-size: 12px;
  padding-top: 20px;
`;
