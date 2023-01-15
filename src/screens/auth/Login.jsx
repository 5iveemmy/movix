import React, { useState } from "react";
import * as S from "./styles";
import authLogo from "../../assets/images/authLogo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <S.Container>
      <S.Wrapper>
        <S.Image src={authLogo} alt="logo" />
        <S.Header>
          <S.HeaderText>Hi, Welcome</S.HeaderText>
          <S.HeaderPara>Please sign-up to start your experience</S.HeaderPara>
        </S.Header>
        <S.InputContainer>
          <S.Input
            placeholder="Email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.PasswordDiv>
            <S.Input
              placeholder="Password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.StyledEye />
          </S.PasswordDiv>
        </S.InputContainer>
        <S.Button type="submit">Login</S.Button>
        <S.AuthFooter>
          <S.AuthFooterPara>
            Don't have an account?
            <S.StyledLink to="/"> Register</S.StyledLink>
          </S.AuthFooterPara>
        </S.AuthFooter>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
