import React, { useContext } from "react";
import MenuContext from "./MenuContext";

export default function DisplayMenu() {
  const menu = JSON.parse(localStorage.getItem("menu"));

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col submenu main-color">
            <h1>Your Menu Items</h1>
            <ul>
              {menu.map((item, index) => (
                <li key={index}>
                  <h3>{item}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
