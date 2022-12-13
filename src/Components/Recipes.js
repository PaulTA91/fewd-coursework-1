import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import DisplayMenu from "./Menu";
import MenuContext from "./MenuContext";

const Recipes = ({ recipes }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleClick = (e, selectedItem) => {
    let newState = [...selectedItems, selectedItem];
    setSelectedItems(newState);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 submenu main-color">
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.id}>
                  <Link className="menu-list" to={recipe.name}>
                    {recipe.name}
                  </Link>
                  <p></p>
                  <Button onClick={(e) => handleClick(e, recipe.name)}>
                    Add to Menu
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4" style={{ margin: "5%" }}>
            <Outlet />
          </div>
          <MenuContext.Provider value={[selectedItems, setSelectedItems]}>
            <div className="col-3 submenu main-color">
              <DisplayMenu />
            </div>
          </MenuContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Recipes;
