import React from "react";
import"./results.css"

export default function Example (props) {
  if (props.example){
    return (
      <div className="example">
        <strong>Example:</strong> <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}