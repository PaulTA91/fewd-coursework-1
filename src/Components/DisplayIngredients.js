import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordian from "react-bootstrap/Accordion";

const DisplayIngredients = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const ingredients = currentItem[0].ingredients;

  return (
    <>
      <Accordian id="ingredients" className="recipe-accordian">
        <Accordian.Header>Ingredients</Accordian.Header>
        <Accordian.Body className="accordian-background">
          <Link>Add to Shopping List</Link>
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
