import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import DisplayMenu from "./Menu";
import MenuContext from "./MenuContext";
import ShoppingContext from "./ShoppingContext";
import DisplayShoppingList from "./DisplayShoppingList";

const Recipes = ({ recipes }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const addToMenu = (e, selectedItem) => {
    let newState = [...selectedItems, selectedItem];
    setSelectedItems(newState);
    localStorage.setItem("menu", JSON.stringify(newState));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu main-color">
            <ul>
              {recipes.map((recipe) => (
                <div className="item-box">
                  <li key={recipe.id}>
                    <Link className="menu-list" to={recipe.name}>
                      {recipe.name}
                    </Link>
                    <p></p>
                    <Button
                      className="menu-button"
                      onClick={(e) => addToMenu(e, recipe.name)}
                    >
                      Add to Menu
                    </Button>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="col-4" style={{ margin: "5%" }}>
            <Outlet />
          </div>
          <MenuContext.Provider value={[selectedItems, setSelectedItems]}>
            <div className="col-2 submenu main-color">
              <DisplayMenu recipe={selectedItems} />
            </div>
          </MenuContext.Provider>
          <ShoppingContext.Provider>
            <div className="col-2 submenu main-color">
              <DisplayShoppingList />
            </div>
          </ShoppingContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Recipes;
