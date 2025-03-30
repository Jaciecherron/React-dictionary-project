import React from "react";

export default function Phonetics (props) {
   if (props.phonetic) {
     return (
       <div className="photnetic">
         <strong>Photnetic:</strong>{props.photnetic}
       </div>
     );
   } else {
     return null;
   }
}