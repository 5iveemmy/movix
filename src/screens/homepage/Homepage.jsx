import React from "react";
import * as S from "./Homepage.styles";
import imdb from "../../assets/images/imdb.svg";
import rottenTomatoes from "../../assets/images/rottenTomatoes.svg";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedMovies from "../../components/FeaturedMovies/FeaturedMovies";
import NewArrival from "../../components/NewArrival/NewArrival";
import FeaturedCast from "../../components/FeaturedCasts/FeaturedCast";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import ExclusiveVideos from "../../components/ExclusiveVideos/ExclusiveVideos";

const Homepage = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/now_playing?" +
    process.env.REACT_APP_API_KEY;

  const { data } = useQuery(["data"], async () => {
    const data = await (await fetch(`${API_URL}`)).json();
    return data;
  });

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const moviePoster = data?.results[0]?.poster_path;

  return (
    <>
      <S.Container
        style={{
          backgroundImage: `url('${IMG_URL + moviePoster}')`,
        }}
      >
        <Navbar />
        <S.Wrapper>
          <S.DescriptionBox>
            <S.Title>{data?.results[0]?.title}</S.Title>
            <S.RatingsContainer>
              <S.Ratings>
                <S.Image src={imdb} alt="Imdb" />
                <S.RateNumber>{data?.results[0]?.vote_average}</S.RateNumber>
              </S.Ratings>
              <S.Ratings>
                <S.Image src={rottenTomatoes} alt="Rotten Tomatoes" />
                <S.RateNumber>96%</S.RateNumber>
              </S.Ratings>
            </S.RatingsContainer>
            <S.MovieDescription>
              {data?.results[0]?.overview}
            </S.MovieDescription>
            <S.Button>
              <S.StyledPlay />
              WATCH TRAILER
            </S.Button>
          </S.DescriptionBox>
        </S.Wrapper>
      </S.Container>
      <FeaturedMovies />
      <NewArrival />
      <ExclusiveVideos />
      <FeaturedCast />
      <Footer />
    </>
  );
};

export default Homepage;
