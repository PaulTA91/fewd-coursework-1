import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordian from "react-bootstrap/Accordion";

const ShowReviews = ({ recipes }) => {
  const { itemId } = useParams();
  const currentItem = recipes.filter((item) => {
    return item.name === itemId;
  });
  const reviews = currentItem[0].reviews;

  return (
    <>
      <Accordian id="reviews" className="recipe-accordian">
        <Accordian.Header>Reviews</Accordian.Header>
        <Accordian.Body className="accordian-background">
          <ul>
            {reviews.map((reviews) => (
              <li key={reviews.name}>
                {reviews.name}: {reviews.content}
              </li>
            ))}
          </ul>
        </Accordian.Body>
      </Accordian>
    </>
  );
};

export default ShowReviews;
