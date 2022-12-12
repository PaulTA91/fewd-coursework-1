import React from "react";
import { Link, Outlet } from "react-router-dom";

const Recipes = ({ recipes }) => {
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
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6" style={{ margin: "5%" }}>
            <Outlet />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};
export default Recipes;
