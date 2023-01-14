import React from "react";
import * as S from "./HomePage.styles";
import poster from "../../assets/images/poster.svg";
import imdb from "../../assets/images/imdb.svg";
import rottenTomatoes from "../../assets/images/rottenTomatoes.svg";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedMovies from "../../components/FeaturedMovies/FeaturedMovies";
import NewArrival from "../../components/NewArrival/NewArrival";
import FeaturedCast from "../../components/FeatuedCasts/FeaturedCast";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <S.Container style={{ backgroundImage: `url('${poster}')` }}>
        <Navbar />
        <S.Wrapper>
          <S.DescriptionBox>
            <S.Title>John Wick 3: Parabellum</S.Title>
            <S.RatingsContainer>
              <S.Ratings>
                <S.Image src={imdb} alt="Imdb" />
                <S.RateNumber>86.0/100</S.RateNumber>
              </S.Ratings>
              <S.Ratings>
                <S.Image src={rottenTomatoes} alt="Rotten Tomatoes" />
                <S.RateNumber>96%</S.RateNumber>
              </S.Ratings>
            </S.RatingsContainer>
            <S.MovieDescription>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
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
      <FeaturedCast />
      <Footer />
    </>
  );
};

export default HomePage;
