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

export default function MovieListContainer() {
  const [nav, setNav] = useState("upcoming"); ////using state to navigate between page,
  //in out example it is easier than using Nav component, with Upcoming set as the "Homepage"
  const [favArr, setFavArr] = useState([]);
  return (
    <Router>
      <ButtonContainer>
        <button>
          <Link to="/Upcoming">Upcoming</Link>
        </button>
        <button>
          <Link to="/top_rated">Top Rated</Link>
        </button>
        <button>
          <Link to="/popular">Popular</Link>
        </button>
        <button>
          <Link to="/search">Search</Link>
        </button>
      </ButtonContainer>
      <div>{favArr.length}</div>
      <MovieContainer>
        <Routes>
          <Route path="/Upcoming" element={<Upcoming count={favArr} />} />
          <Route path="/top_rated" element={<TopRated />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </MovieContainer>
    </Router>
  );
}
