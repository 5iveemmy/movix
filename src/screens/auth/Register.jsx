import React, { useState } from "react";
import * as S from "./styles";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../auth/Firebase";
import authLogo from "../../assets/images/authLogo.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();
    setError("");
    // Create a new user with email and password using firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => setError(err.message));

    setEmail("");
    setPassword("");
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
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.StyledEye />
          </S.PasswordDiv>
        </S.InputContainer>
        <S.Button type="submit">Register</S.Button>
        <S.AuthFooter>
          <S.AuthFooterPara>
            Already have an account?
            <S.StyledLink to="/login"> Login</S.StyledLink>
          </S.AuthFooterPara>
          {error && <p>{error}</p>}
        </S.AuthFooter>
      </S.Wrapper>
    </S.Container>
  );
};

export default Register;
