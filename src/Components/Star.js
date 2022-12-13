import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star(props) {
  console.log(props.selectes);
  return (
    <FaStar color={props.selected ? "red" : "grey"} onClick={props.onSelect} />
  );
}
