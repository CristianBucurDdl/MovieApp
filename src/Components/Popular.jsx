import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import MovieContainer from "./pageComponents/MovieContainer";
export default function Popular() {
  const [upcoming, setUpcoming] = useState(null);
  const [favArr, setFavArr] = useState([]);
  function handleFav(e) {
    if (!favArr.includes(e)) {
      setFavArr([...favArr, e]);
    } else {
      let index = favArr.indexOf(e);
      favArr.splice(index, 1);
      setFavArr([...favArr]);
    }
  }

  const otherBaseUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=517f9f5b4b47532a5d573cfbaa3c556c";

  useEffect(() => {
    axios.get(otherBaseUrl).then((response) => {
      //////geting the data from the specific section in the api
      setUpcoming(response.data);
    });
  }, []);
  if (!upcoming) return null; ///handel any errors for for app not to crash

  const newMovieArr = upcoming.results;

  //creating logic to map every obj that returns from get(api) and rendering them
  function MovieSplit() {
    return newMovieArr.map((each, i) => {
      return (
        <MovieContainer
          key={each.id}
          each={each}
          favArr={favArr}
          handleFav={handleFav}
        />
      );
    });
  }
  return <MovieSplit />;
}
