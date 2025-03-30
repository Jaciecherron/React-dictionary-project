import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example"
import Phonetics from "./Phonetics";
import "./results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="results">
          <h2>{props.results.word}</h2>
        <section>
          <h3>{props.results.partOfSpeech}</h3>
          <Phonetics phonetic={props.results.phoentic} />
        </section>
        <section>
          <p>
            <strong>Definition: </strong>
            {props.results.definition}
          </p>
        </section>
        <section>
          <p>
            <Example example={props.results.example} />
          </p>
          <Synonyms synonyms={props.results.synonyms} />
        </section>
      </div>
    );
} else {
  return null;
}}