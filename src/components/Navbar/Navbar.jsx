import React, { useState } from "react";
import * as S from "./Navbar.styles";
import movixLogo from "../../assets/images/movixLogo.svg";
import menu from "../../assets/images/menu.svg";
import { useQuery } from "react-query";
const Navbar = () => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState();
  const name = localStorage.getItem("displayName");

  const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?${process.env.REACT_APP_API_KEY}&query=${value}`;

  useQuery(
    ["movies", "value"],
    async () => {
      const data = await (await fetch(`${SEARCH_MOVIE_URL}`)).json();
      setMovies(data);
    },
    {
      enabled: Boolean(value),
    }
  );

  return (
    <S.Container>
      <S.Div>
        <S.Image src={movixLogo} alt="movix logo" />
        <S.Movix>Movix</S.Movix>
      </S.Div>
      <S.SearchContainer>
        <S.Input
          type="text"
          placeholder="What do you want to watch?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <S.StyledSearchIcon />
        {value !== "" && (
          <S.MoviesListDiv>
            {movies?.results?.map(({ title }) => (
              <S.MoviesList>{title}</S.MoviesList>
            ))}
          </S.MoviesListDiv>
        )}
      </S.SearchContainer>
      <S.Div>
        <S.Name>Hi, {name}</S.Name>
        <S.Image src={menu} alt="menu logo" />
      </S.Div>
    </S.Container>
  );
};

export default Navbar;
