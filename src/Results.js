import React from "react";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
<div className="results">
  <h2>{props.results.word}</h2>
  <p>{props.results.definition}</p>
</div>);
} else {
  return null;
}}