import React from "react";
import { Link, useParams } from "react-router-dom";
import Accordian from "react-bootstrap/Accordion";
import AddReview from "./AddReview";

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
          <AddReview recipe={currentItem[0]} />
          <h2>User Reviews</h2>
          <ul>
            {reviews.map((reviews) => (
              <li key={reviews.name}>
                <h2>{reviews.name}</h2> {reviews.content}
              </li>
            ))}
          </ul>
        </Accordian.Body>
      </Accordian>
    </>
  );
};

export default ShowReviews;
