import React from "react";
import * as S from "./Footer.styles";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";

const Footer = () => {
  return (
    <S.Container>
      <S.FlexContainer>
        <S.Icon src={facebook} alt="facebook" />
        <S.Icon src={instagram} alt="Instagram" />
        <S.Icon src={twitter} alt="twitter" />
        <S.Icon src={youtube} alt="Youtube" />
      </S.FlexContainer>
      <S.FlexContainer>
        <S.Text>Conditions of Use</S.Text>
        <S.Text>Privacy & Policy</S.Text>
        <S.Text>Press Room</S.Text>
      </S.FlexContainer>
      <S.CopyRight> © 2021 Movix</S.CopyRight>
    </S.Container>
  );
};

export default Footer;
