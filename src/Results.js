import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example"
import Phonetics from "./Phonetics";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        <h3>{props.results.partOfSpeech}</h3>
        <Phonetics phonetic={props.results.phoentic} />
        <p>
          <strong>Definition: </strong>
          {props.results.definition}
        </p>
        <p>
          <Example example={props.results.example} />
        </p>
        <Synonyms synonyms={props.results.synonyms} />
      </div>
    );
} else {
  return null;
}}