import React from "react";
import { useState } from "react";

import axios from "axios";
import { FaSearch } from "react-icons/fa"; /////icon for search button
import { MovieItem, MovieContainer } from "./cssIndex.js/styledComponents"; ///importing css as component

export default function Search() {
  const [searchBy, setSearchBy] = useState(""); ///value of input for search in db
  const [searchResult, setSearchResult] = useState(null); ///final result after get()
  const [isLoading, setIsLoading] = useState(false); //loading status to be used in case loading is slow
  const [err, setErr] = useState(""); ///error status
  const [fav, setFav] = useState(false); ///st so fav status

  ///temporary func for set to favorites ,
  function handleFav() {
    setFav(!fav);
    if (fav === true) {
      console.log("added");
    } else {
      console.log("removed");
    }
  }

  ///functionality for get() on clck , to use input in form to search in db
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=517f9f5b4b47532a5d573cfbaa3c556c&language=en-US&query=" +
          searchBy
      );
      console.log(data.data.results);
      return setSearchResult(data.data.results);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  if (err !== "") {
    console.log(err);
  } else {
    console.log("request ok");
  }
  //component to be mapped and render after search is finished
  function Post({ post }) {
    return (
      <MovieItem color="white">
        <p>{post.title}</p>
        <img
          src={"https://image.tmdb.org/t/p/w500" + "/" + post.poster_path}
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
  }
  //component that is using  Post component from above and mapping from search result Array
  function ListPage() {
    const results = searchResult
      ? searchResult.map((post) => <Post key={post.id} post={post} />)
      : [];
    const content = results?.length ? (
      results
    ) : (
      <MovieItem>
        <p>No result</p>
      </MovieItem>
    );

    return <MovieContainer>{content}</MovieContainer>;
  }

  return (
    // form component from witch search value will be taken
    <main>
      <div className="App">
        <input
          id="searchBy"
          name="searchBy"
          placeholder="Search title"
          value={searchBy}
          type="text"
          autoComplete="off"
          onChange={(e) => setSearchBy(e.target.value)}
        />

        <button onClick={handleClick}>
          <FaSearch />
        </button>
      </div>

      <ListPage />
    </main>
  );
}
