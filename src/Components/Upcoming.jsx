import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieItem } from "./cssIndex.js/styledComponents";
import { Button } from "./Buttons/CountButton";
import MovieContainer from "./pageComponents/MovieContainer";
export default function Upcoming(nav) {
  const [upcoming, setUpcoming] = useState(null);
  // const [fav, setFav] = useState(false);
  const [favArr, setFavArr] = useState([]);

  const otherBaseUrl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=517f9f5b4b47532a5d573cfbaa3c556c";
  ////functionality to add an remove movie id if id is already inside the array so we prevent duplicate

  console.log(favArr);
  //////geting the data from the specific section in the api
  useEffect(() => {
    axios.get(otherBaseUrl).then((response) => {
      setUpcoming(response.data);
    });
  }, []);
  if (!upcoming) return null; ///handel any errors for for app not to crash
  function handleFav(e) {
    if (!favArr.includes(e)) {
      setFavArr([...favArr, e]);
    } else {
      let index = favArr.indexOf(e);
      favArr.splice(index, 1);
      setFavArr([...favArr]);
    }
  }
  const newMovieArr = upcoming.results;
  //creating logic to map every obj that returns from get(api) and rendering them
  function MovieSplit() {
    // const test = favArr;
    // console.log(newMovieArr);
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
