import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../auth/Firebase";
import authLogo from "../../assets/images/authLogo.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    setError("");
    // Create a new user with email and password using firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => setError(err.message));
    setEmail("");
    setPassword("");
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <S.Container>
      <S.Wrapper onSubmit={register}>
        <S.Image src={authLogo} alt="logo" />
        <S.Header>
          <S.HeaderText>Hi, Welcome</S.HeaderText>
          <S.HeaderPara>Please sign-up to start your experience</S.HeaderPara>
        </S.Header>
        <S.InputContainer>
          <S.Input placeholder="Full Name" type="name" />
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
              value={password}
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
        <S.Button type="submit">Register</S.Button>
        {error && <S.Error>{error}</S.Error>}
        <S.AuthFooter>
          <S.AuthFooterPara>
            Already have an account?
            <S.StyledLink to="/login"> Login</S.StyledLink>
          </S.AuthFooterPara>
        </S.AuthFooter>
      </S.Wrapper>
    </S.Container>
  );
};

export default Register;
