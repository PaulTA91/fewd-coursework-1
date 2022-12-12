import React from "react";
import { useParams } from "react-router-dom";
import Accordian from "react-bootstrap/Accordion";

const ShowReviews = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const instructions = currentItem[0].instructions;

  return (
    <>
      <Accordian id="instructions" className="recipe-accordian">
        <Accordian.Header>Instructions</Accordian.Header>
        <Accordian.Body className="accordian-background">
          {instructions}
        </Accordian.Body>
      </Accordian>
    </>
  );
};

export default ShowReviews;
