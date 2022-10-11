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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

import { SiYoutubestudio, SiPopos } from "react-icons/si";
export default function MovieListContainer() {
  const [nav, setNav] = useState("upcoming"); ////using state to navigate between page,
  //in out example it is easier than using Nav component, with Upcoming set as the "Homepage"
  const [count, setCount] = useState([]);
  const [isFav, setIsFav] = useState([]);

  return (
    <Router>
      <ButtonContainer>
        <Link to="/Upcoming">
          <button>
            <HiHome /> Home
          </button>
        </Link>

        <Link to="/Upcoming/top_rated">
          <button>
            <SiYoutubestudio />
            Top Rated
          </button>
        </Link>

        <Link to="/Upcoming/popular">
          <button>
            <SiPopos />
            Popular
          </button>
        </Link>

        <Link to="/Upcoming/search">
          <button>
            <FaSearch />
            Search
          </button>
        </Link>
      </ButtonContainer>
      <div>{count.length}</div>
      <MovieContainer>
        <Routes>
          <Route
            path="/Upcoming/*"
            element={<Upcoming favArr={count} setFavArr={setCount} />}
          />
          <Route
            path="/Upcoming/top_rated/*"
            element={<TopRated count={count} setCount={setCount} />}
          />
          <Route
            path="/Upcoming/popular/*"
            element={<Popular count={count} setCount={setCount} />}
          />
          <Route
            path="/Upcoming/search/*"
            element={<Search count={count} setCount={setCount} />}
          />
        </Routes>
      </MovieContainer>
    </Router>
  );
}
