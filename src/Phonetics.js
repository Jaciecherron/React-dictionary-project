import React from "react";
import "./phonetics.css"

export default function Phonetics (props) {
   if (props.phonetic) {
     return (
       <div className="phonetic">
         <strong>Phonetic:</strong> {props.phonetic}
       </div>
     );
   } else {
     return null;
   }
}