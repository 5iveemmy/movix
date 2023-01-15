import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../../auth/Firebase";
import authLogo from "../../assets/images/authLogo.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { doc, setDoc } from "@firebase/firestore";
import { login } from "../../store/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    let isValid = true;

    //if the input field is empty: this trows an error
    if (name === "" || email === "" || password === "") {
      isValid = false;
      toast.error("invalid credential");
    }

    return isValid;
  };

  const register = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(
          async (user) => {
            let userId = user.user.uid;

            let userInfo = {
              name,
              email,
              uid: userId,
            };

            await setDoc(doc(db, "users", userId), userInfo);
            dispatch(
              login({
                email: user.user.email,
                uid: user.user.uid,
                name: user.user.name,
              })
            );
          }
        );
      } catch (err) {
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error("email already exist");
        } else if (
          err.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          toast.error("your password is too short please retry");
        }
      }
    }
    navigate("/login");
    setEmail("");
    setPassword("");
    setName("");
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
          <S.Input
            placeholder="Full Name"
            type="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
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
