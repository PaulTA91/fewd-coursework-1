import React from "react";
import { Link, useParams } from "react-router-dom";
import Accordian from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import DisplayIngredients from "./DisplayIngredients";
import ShowReviews from "./ShowReviews";
import ShowNutrition from "./ShowNutrition";
import DisplayInstructions from "./DisplayInstructions";

const MenuItem = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const { name, description } = currentItem[0];

  return (
    <>
      {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">£{parseFloat(price).toFixed(2)}</p>
        </div>
      </div> */}
      {/* <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>{description}</Card.Body>
        <Card.Footer>{price}</Card.Footer>
      </Card> */}
      <Card className="recipe-card">
        <Accordian>
          <h1>{name}</h1>
          <h3>{description}</h3>
          <Link>Add to Menu</Link>
          <p></p>
          <Link>Leave a Review</Link>
          <DisplayInstructions recipes={recipes} />
          <DisplayIngredients recipes={recipes} />
          <ShowReviews recipes={recipes} />
          <ShowNutrition recipes={recipes} />
        </Accordian>
      </Card>
      <p></p>
    </>
  );
};

export default MenuItem;
