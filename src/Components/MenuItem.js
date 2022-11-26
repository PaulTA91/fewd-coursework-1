import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordian from "react-bootstrap/Accordion";
import DisplayIngredients from "./DisplayIngredients";
import ShowReviews from "./ShowReviews";

const MenuItem = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const { name, description, instructions } = currentItem[0];

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
      <Accordian>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <Accordian.Header>Instructions</Accordian.Header>
        <Accordian.Body>{instructions}</Accordian.Body>
        <DisplayIngredients recipes={recipes} />
        <ShowReviews recipes={recipes} />
      </Accordian>
    </>
  );
};

export default MenuItem;
