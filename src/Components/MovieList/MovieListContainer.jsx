import React from "react";
import {
  MovieContainer,
  ButtonContainer,
} from "../cssIndex.js/styledComponents";
import { useState, useEffect } from "react";
import Upcoming from "../Upcoming";
import TopRated from "../TopRated";
import Popular from "../Popular";
import Search from "../SearchPage";
export default function MovieListContainer() {
  const [nav, setNav] = useState("upcoming");

  return (
    <>
      <ButtonContainer>
        <button
          onClick={() => {
            setNav("search");
          }}
        >
          Search For movies
        </button>
        <button
          onClick={() => {
            setNav("upcoming");
          }}
        >
          Upcoming
        </button>
        <button
          onClick={() => {
            setNav("top_rated");
          }}
        >
          Top Rated
        </button>
        <button
          onClick={() => {
            setNav("popular");
          }}
        >
          Popular
        </button>
      </ButtonContainer>
      <MovieContainer>
        {nav === "upcoming" ? <Upcoming /> : " "}
        {nav === "top_rated" ? <TopRated /> : " "}
        {nav === "popular" ? <Popular /> : " "}
        {nav === "search" ? <Search /> : " "}
      </MovieContainer>
    </>
  );
}
