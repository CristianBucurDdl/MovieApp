import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchField = ({ posts, setSearchResult }) => {
  const handleSubmit = (e) => e.preventDefault(); ///function to just prevent the default

  const handleSearchChange = (e) => {
    ///function to handle in input is empty
    if (!e.target.value) return setSearchResult(posts);
    ////and function to search based on the input
    const resultArray = posts.filter((post) =>
      post.title.includes(e.target.value)
    );

    setSearchResult(resultArray);
  };
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="Search_input"
          id="searchBy"
          type="text"

          // onChange={handleSearchChange}
        />
        <button className="search_button" onClick={handleSearchChange}>
          <FaSearch />
        </button>
      </form>
    </>
  );
};

// <FormField>
//   <div className="search">
//     <span>Search Movie:</span>
//     <input
//       id="searchBy"
//       name="searchBy"
//       placeholder="Search title"
//       value={searchBy}
//       type="text"
//       autoComplete="off"
//       onChange={(e) => setSearchBy(e.target.value)}
//     />
//   </div>
// </FormField>
