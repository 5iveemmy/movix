import React from "react";
import * as S from "./AuthStyles.styles";
import movix from "../../assets/images/movix.svg";

const Auth = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Image src={movix} alt="logo" />
        <S.Header>
          <S.HeaderText>Hi, Welcome</S.HeaderText>
          <S.HeaderPara>Please sign-up to start your experience</S.HeaderPara>
        </S.Header>
        <S.InputContainer>
          <S.Input placeholder="Full Name" type="name" />
          <S.Input placeholder="Email" type="email" />
          <S.PasswordDiv>
            <S.Input placeholder="Password" type="password" />
            <S.StyledEye />
          </S.PasswordDiv>
        </S.InputContainer>
        <S.Button>Register</S.Button>
        <S.AuthFooter>
          <S.AuthFooterPara>
            Already have an account? <S.Span>Login</S.Span>
          </S.AuthFooterPara>
        </S.AuthFooter>
      </S.Wrapper>
    </S.Container>
  );
};

export default Auth;
