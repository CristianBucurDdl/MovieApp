import React, { useState } from "react";
import { FormField } from "./searchComponent";

export default function Search() {
  const [searchBy, setSearchBy] = useState("");
  console.log(searchBy);

  return (
    <FormField>
      <div className="search">
        <span>Search Movie:</span>
        <input
          id="searchBy"
          name="searchBy"
          placeholder="Search title"
          value={searchBy}
          type="text"
          autoComplete="off"
          onChange={(e) => setSearchBy(e.target.value)}
        />
      </div>
    </FormField>
  );
}
