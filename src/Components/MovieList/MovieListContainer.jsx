import React from "react";
import { MovieContainer, MovieItem } from "./MovieListComponent";
import axios from "axios";
import { useState, componentDidMount } from "react";

export default function MovieListContainer() {
  console.log("api");
  return (
    <MovieContainer>
      <MovieItem />
      {/* <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem /> */}
    </MovieContainer>
  );
}
