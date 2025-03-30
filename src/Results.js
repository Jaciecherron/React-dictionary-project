import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example"

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        <h3>{props.results.partOfSpeech}</h3>
        <p>
          <strong>Definition: </strong>
          {props.results.definition}
        </p>
        <p>
          <Example example={props.results.example} />
        </p>
        <p>
          <Synonyms synonyms={props.results.synonyms} />
        </p>
      </div>
    );
} else {
  return null;
}}