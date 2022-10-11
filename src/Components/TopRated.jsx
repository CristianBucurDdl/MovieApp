import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieItem } from "./cssIndex.js/styledComponents";
import MovieContainer from "./pageComponents/MovieContainer";
export default function TopRated({ count, setCount }) {
  const [upcoming, setUpcoming] = useState(null);
  const [fav, setFav] = useState(false);
  const [favArr, setFavArr] = useState([]);

  const otherBaseUrl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=517f9f5b4b47532a5d573cfbaa3c556c";

  ////temporary replacement for favorite button
  function handleFav(e) {
    if (!favArr.includes(e)) {
      setFavArr([...favArr, e]);
      setCount([...favArr, e]);
    } else {
      let index = favArr.indexOf(e);
      favArr.splice(index, 1);
      setFavArr([...favArr]);
      setCount([...favArr]);
    }
  }
  //////geting the data from the specific section in the api
  useEffect(() => {
    axios.get(otherBaseUrl).then((response) => {
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
