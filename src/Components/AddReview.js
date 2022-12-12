import React, { useState } from "react";
import recipes from "../Data/Recipes";

const AddReview = ({ recipe }) => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const addReview = (name, reviewText) => {
    const newReview = { name: name, content: reviewText };
    recipe.reviews.push(newReview);
  };
  return (
    <>
      <div>
        <h2>Add a Review</h2>
        <form>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Username"
            aria-label="Username"
          />
          <input
            type={"text"}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Enter Review"
            aria-label="Review"
          />
          <input
            type={"submit"}
            value="Submit"
            onSubmit={addReview(name, reviewText)}
          />
        </form>
      </div>
    </>
  );
};

export default AddReview;
