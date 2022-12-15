import React, { useContext, useState } from "react";
import IngredientsContext from "./ShoppingContext";
import { Button } from "react-bootstrap";

export default function DisplayMenu() {
  const shoppingList = JSON.parse(localStorage.getItem("shoppingList"));

  // const [selectedItems, setSelectedItems] = useState([]);

  // const removeFromMenu = (e, index) => {
  //   console.log(index);

  //   let newState = menu.splice(index);
  //   setSelectedItems(newState);
  //   localStorage.setItem("menu", JSON.stringify(newState));
  // };
  // const removeFromMenu = (item) => {
  //   const index = menu.indexOf(item);

  //   if (index > -1) {
  //     const newMenu = menu.splice(index, 1);
  //     localStorage.setItem("menu", JSON.stringify(newMenu));
  //   }
  // };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col menu-list main-color">
            <h1>Shopping List</h1>
            <ul>
              {shoppingList.map((item, index) => (
                <li key={item.index}>
                  <h3>{item.name}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
