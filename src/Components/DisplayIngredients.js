import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Accordian from "react-bootstrap/Accordion";

const DisplayIngredients = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const ingredients = currentItem[0].ingredients;

  const [selectedItems, setSelectedItems] = useState([]);
  const addToShoppingList = (e, selectedItem) => {
    localStorage.setItem("shoppingList", JSON.stringify(ingredients));
  };

  return (
    <>
      <Accordian id="ingredients" className="recipe-accordian">
        <Accordian.Header>Ingredients</Accordian.Header>
        <Accordian.Body className="accordian-background">
          <p
            className="add-to-shopping"
            onClick={(e) => addToShoppingList(e, ingredients)}
          >
            Add to Shopping List
          </p>
          <ul>
            {ingredients.map((ingredients) => (
              <li key={ingredients.name}>
                {ingredients.name}: {ingredients.amount}
              </li>
            ))}
          </ul>
        </Accordian.Body>
      </Accordian>
    </>
  );
};

export default DisplayIngredients;

// <ul>
// {recipes.map((recipe) => (
//   <li key={recipe.id}>
//     <Link to={recipe.name}>{recipe.name}</Link>
//   </li>
// ))}
// </ul>
