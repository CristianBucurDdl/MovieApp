import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MovieItem } from "./cssIndex.js/styledComponents";

export default function Popular() {
  const [upcoming, setUpcoming] = useState(null);
  const [fav, setFav] = useState(false);
  const favoriteArr = [];

  const otherBaseUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=517f9f5b4b47532a5d573cfbaa3c556c";

  function addTitle(obj) {
    ////tried to mage a favorite array to push to a global state but need to initialize redux for it   to work across the app
    favoriteArr.push(obj);
    console.log(favoriteArr);
  }
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
        <MovieItem>
          <p key={each.id}>{each.title}</p>

          <img
            src={"https://image.tmdb.org/t/p/w500" + "/" + each.poster_path}
            alt="image"
          />
          <button onClick={() => addTitle(each)}>add</button>
        </MovieItem>
      );
    });
  }
  return <MovieSplit />;
}
