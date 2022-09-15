import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieItem } from "./cssIndex.js/styledComponents";

export default function TopRated(nav) {
  const [upcoming, setUpcoming] = useState(null);
  const [fav, setFav] = useState(false);

  const otherBaseUrl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=517f9f5b4b47532a5d573cfbaa3c556c";

  function handleFav() {
    setFav(!fav);
    if (fav === true) {
      console.log("added");
    } else {
      console.log("removed");
    }
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
          <p key={each + 1}>{each.title}</p>

          <img
            src={"https://image.tmdb.org/t/p/w500" + "/" + each.poster_path}
            alt="image"
          />
          {fav && (
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
          )}
        </MovieItem>
      );
    });
  }
  return <MovieSplit />;
}
