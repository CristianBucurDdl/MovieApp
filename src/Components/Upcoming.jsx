import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieItem } from "./cssIndex.js/styledComponents";
import { Button } from "./Buttons/CountButton";

export default function Upcoming(nav) {
  const [upcoming, setUpcoming] = useState(null);
  const [fav, setFav] = useState(false);
  const [favArr, setFavArr] = useState([]);

  const otherBaseUrl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=517f9f5b4b47532a5d573cfbaa3c556c";
  ////functionality to add an remove movie id if id is already inside the array so we prevent duplicate
  function handleFav(e) {
    if (!favArr.includes(e)) {
      setFavArr([...favArr, e]);
    } else {
      let index = favArr.indexOf(e);
      favArr.splice(index, 1);
      setFavArr([...favArr]);
    }
  }

  console.log(favArr);
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
    // console.log(newMovieArr);
    return newMovieArr.map((each, i) => {
      return (
        <MovieItem>
          <div className="posterContainer">
            <img
              src={"https://image.tmdb.org/t/p/w500" + "/" + each.poster_path}
              alt="image"
            />
          </div>
          <div className="title">
            <h3 key={each + 1}>{each.title}</h3>
          </div>
          <div className="releaseDate">
            <p>Release Date:{each.release_date}</p>
          </div>

          {!favArr.includes(each) ? (
            <button
              onClick={() => {
                handleFav(each);
              }}
              aria-label="delete"
              color="primary"
            >
              Add favorite
            </button>
          ) : (
            <button
              onClick={() => {
                handleFav(each);
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
