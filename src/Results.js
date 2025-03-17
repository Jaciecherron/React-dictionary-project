import React from "react";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        <h3>{props.results.partOfSpeech}</h3>
        <p>{props.results.definition}</p>
        <p>
          <strong>Example:</strong> <em>{props.results.example}</em>
        </p>
      </div>
    );
} else {
  return null;
}}