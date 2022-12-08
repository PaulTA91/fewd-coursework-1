import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordian from "react-bootstrap/Accordion";
import FetchData from "./FetchNutrition";

const ShowReviews = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const name = currentItem[0].name;

  return (
    <>
      <Accordian id="reviews" className="recipe-accordian">
        <Accordian.Header>Nutritional Information</Accordian.Header>
        <Accordian.Body>
          <FetchData query={name} />
        </Accordian.Body>
      </Accordian>
    </>
  );
};

export default ShowReviews;
