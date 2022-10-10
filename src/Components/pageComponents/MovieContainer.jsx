import React from "react";
import { useState, useEffect } from "react";
import { MovieItem } from "../cssIndex.js/styledComponents";
import { ReactComponent as SaveIcon } from "../../utils/Saved.svg";
import { ReactComponent as NotSaved } from "../../utils/Unsaved.svg";
export default function MovieContainer({ each, handleFav, favArr }) {
  //   const favArr = test;
  return (
    <MovieItem>
      {!favArr.includes(each) ? (
        <button
          onClick={() => {
            handleFav(each);
          }}
          aria-label="delete"
          color="primary"
        >
          <NotSaved />
        </button>
      ) : (
        <button
          onClick={() => {
            handleFav(each);
          }}
          aria-label="delete"
          color="primary"
        >
          <SaveIcon />
        </button>
      )}
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
    </MovieItem>
  );
}
