import React from "react";
import * as S from "./Navbar.styles";
import movixLogo from "../../assets/images/movixLogo.svg";
import menu from "../../assets/images/menu.svg";
const Navbar = () => {
  const name = localStorage.getItem("displayName");
  return (
    <S.Container>
      <S.Div>
        <S.Image src={movixLogo} alt="movix logo" />
        <S.Movix>Movix</S.Movix>
      </S.Div>
      <S.SearchContainer>
        <S.Input type="text" placeholder="What do you want to watch?" />
        <S.StyledSearchIcon />
      </S.SearchContainer>
      <S.Div>
        <S.Name>Hi, {name}</S.Name>
        <S.Image src={menu} alt="menu logo" />
      </S.Div>
    </S.Container>
  );
};

export default Navbar;
