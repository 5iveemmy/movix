import React, { useState } from "react";
import * as S from "./styles";
import authLogo from "../../assets/images/authLogo.svg";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../auth/Firebase";
import { useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => setError(err.message));
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <S.Container>
      <S.Wrapper onSubmit={login}>
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
              type={passwordType}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.Eye onClick={togglePassword}>
              {passwordType === "password" ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </S.Eye>
          </S.PasswordDiv>
        </S.InputContainer>
        <S.Button type="submit">Login</S.Button>
        <S.AuthFooter>
          <S.AuthFooterPara>
            Don't have an account?
            <S.StyledLink to="/"> Register</S.StyledLink>
          </S.AuthFooterPara>
        </S.AuthFooter>
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
