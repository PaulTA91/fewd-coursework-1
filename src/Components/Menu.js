import React, { useContext, useState } from "react";
import MenuContext from "./MenuContext";
import { Button } from "react-bootstrap";

export default function DisplayMenu() {
  const menu = JSON.parse(localStorage.getItem("menu"));

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
            <h1>Your Menu Items</h1>
            <ul>
              {menu.map((item, index) => (
                <li key={index}>
                  <h3>{item}</h3>
                  <Button
                    className="remove-from-menu"
                    //onClick={(e) => removeFromMenu(e, index)}
                  >
                    Remove from Menu
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
