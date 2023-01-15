import React, { useEffect, useState } from "react";
import * as S from "./Navbar.styles";
import movixLogo from "../../assets/images/movixLogo.svg";
import menu from "../../assets/images/menu.svg";
import { UserAuth } from "../../screens/auth/UserAuth";
import { useNavigate } from "react-router";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../auth/Firebase";

const Navbar = () => {
  const [name, setName] = useState("");

  const { currentUser } = UserAuth();
  let navigate = useNavigate();

  let userId = currentUser.uid;

  useEffect(() => {
    const fetchItems = async () => {
      const docRef = doc(db, "users", userId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setName(docSnap.data());
      } else {
        navigate("/username");
      }
    };
    fetchItems();
  }, [userId]);

  console.log(name.name, "user");
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
        <S.Name>Hi, {name.name}</S.Name>
        <S.Image src={menu} alt="menu logo" />
      </S.Div>
    </S.Container>
  );
};

export default Navbar;
