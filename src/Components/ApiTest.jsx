import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://fake-movie-database-api.herokuapp.com/api?s=bat";

export default function APItry() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  const movieArray = post.Search;
  function MovieSplit() {
    return movieArray.map((each, i) => {
      return <p>{each.Title}</p>;
    });
  }
  return (
    <div>
      <h1>title</h1>
      <h1>{post.Search[1].Title}</h1>

      <MovieSplit />
    </div>
  );
}
