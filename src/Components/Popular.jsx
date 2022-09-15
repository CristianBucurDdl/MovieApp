import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieItem } from "./cssIndex.js/styledComponents";

export default function Popular() {
  const [upcoming, setUpcoming] = useState(null);
  const [fav, setFav] = useState(false);

  const otherBaseUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=517f9f5b4b47532a5d573cfbaa3c556c";

  function handleFav() {
    setFav(!fav);
    if (fav === true) {
      console.log("added");
    } else {
      console.log("removed");
    }
  }

  const favoriteArr = [];

  function addTitle(title) {
    favoriteArr.push(title);
    console.log(favoriteArr);
  }
  useEffect(() => {
    axios.get(otherBaseUrl).then((response) => {
      setUpcoming(response.data);
    });
  }, []);
  if (!upcoming) return null;

  const newMovieArr = upcoming.results;

  function MovieSplit() {
    return newMovieArr.map((each, i) => {
      return (
        <MovieItem>
          <p key={each.id}>{each.title}</p>

          <img
            src={"https://image.tmdb.org/t/p/w500" + "/" + each.poster_path}
            alt="image"
          />
          <button onClick={() => addTitle(each.title)}>add</button>
          {/* {fav && (
            <button
              onClick={() => {
                handleFav();
              }}
              aria-label="delete"
              color="primary"
            >
              Add favorite
            </button>
          )}
          {!fav && (
            <button
              onClick={() => {
                handleFav();
              }}
              aria-label="delete"
              color="primary"
            >
              Remove Favorite
            </button>
          )} */}
        </MovieItem>
      );
    });
  }
  return <MovieSplit />;
}
