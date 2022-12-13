import React, { useContext } from "react";
import MenuContext from "./MenuContext";

export default function DisplayMenu() {
  const [menu] = useContext(MenuContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col submenu main-color">
            <h1>Your Menu Items</h1>
            <ul>
              {menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
