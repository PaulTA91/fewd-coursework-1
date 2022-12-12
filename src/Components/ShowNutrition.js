import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordian from "react-bootstrap/Accordion";
import FetchData from "./FetchNutrition";
import BarChart from "./NutritionChart";

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
        <Accordian.Body className="accordian-background">
          {/* <FetchData query={name} /> */}
          <BarChart query={name} />
        </Accordian.Body>
      </Accordian>
    </>
  );
};

export default ShowReviews;
