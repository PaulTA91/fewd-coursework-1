import React, { useState } from "react";
import Recipes from "./Recipes";

export default function Search({ details }) {
  const [searchString, setSearchString] = useState("");

  const filtered = details.filter((entry) => {
    const found = entry.ingredients.find(
      ({ name }) => name.toLowerCase() === searchString.toLowerCase(),
    );
    console.log(found);
    return (
      entry.name.toLowerCase().includes(searchString.toLowerCase()) || found
    );
  });

  return (
    <div>
      <div className="search-bar" style={{ width: 25 + "%" }}>
        <input
          className="form-control search-bar"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
      <Recipes recipes={filtered} />
    </div>
  );
}
