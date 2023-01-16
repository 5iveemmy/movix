import React from "react";
import * as S from "./Footer.styles";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <S.Container>
      <S.FlexContainer>
        <S.Icon src={facebook} alt="facebook" />
        <S.Icon src={instagram} alt="Instagram" />
        <S.Icon src={twitter} alt="twitter" />
        <S.Icon src={youtube} alt="Youtube" />
      </S.FlexContainer>
      <S.ListContainer>
        <S.Text>Conditions of Use</S.Text>
        <S.Text>Privacy & Policy</S.Text>
        <S.Text>Press Room</S.Text>
      </S.ListContainer>
      <S.CopyRight> © {date} Movix</S.CopyRight>
    </S.Container>
  );
};

export default Footer;
