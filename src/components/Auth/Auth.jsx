import React from "react";
import * as S from "./AuthStyles.styles";
import movix from "../../assets/images/movix.svg";

const Auth = ({ login }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Image src={movix} alt="logo" />
        <S.Header>
          <S.HeaderText>Hi, Welcome</S.HeaderText>
          <S.HeaderPara>Please sign-up to start your experience</S.HeaderPara>
        </S.Header>
        <S.InputContainer>
          {!login && <S.Input placeholder="Full Name" type="name" />}
          <S.Input placeholder="Email" type="email" />
          <S.PasswordDiv>
            <S.Input placeholder="Password" type="password" />
            <S.StyledEye />
          </S.PasswordDiv>
        </S.InputContainer>
        <S.Button>{login ? "Login" : "Register"}</S.Button>
        <S.AuthFooter>
          {login ? (
            <S.AuthFooterPara>
              Don't have an account?
              <S.StyledLink to="/register"> Register</S.StyledLink>
            </S.AuthFooterPara>
          ) : (
            <S.AuthFooterPara>
              Already have an account?
              <S.StyledLink to="/login"> Login</S.StyledLink>
            </S.AuthFooterPara>
          )}
        </S.AuthFooter>
      </S.Wrapper>
    </S.Container>
  );
};

export default Auth;
