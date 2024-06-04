import React from "react";
import { useState, useEffect, componentDidMount } from "react";
import { MovieItem } from "../cssIndex.js/styledComponents";
import { ReactComponent as SaveIcon } from "../../utils/Saved.svg";
import { ReactComponent as NotSaved } from "../../utils/Unsaved.svg";
export default function MovieContainer({ each, handleFav, favArr }) {
  const [isFav, setIsFav] = useState(false);
  //   const favArr = test;
  // !favArr.includes(each) ? setIsFav(true) : setIsFav(false);
  useEffect(() => {
    if (favArr.includes(each)) {
      console.log("are");
    } else {
      console.log("n-are");
    }
  }, []);
  return <></>;
}
