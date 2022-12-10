import React, { useState } from "react";
import Menu from "./Menu";

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
      <div style={{ width: 50 + "%" }}>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
      <Menu recipes={filtered} />
    </div>
  );
}
