import React from "react";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
<div className="results">
<h2>
  {props.results.word}
</h2>
{props.results.meanings.map(function(meaning, index) {
  return meaning.definitions[0].definition
})}
</div>
} else {
  return null;
}}