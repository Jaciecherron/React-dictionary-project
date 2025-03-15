import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary() {
let [keyword, setKeyword] = useState ("")

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  function handleResponse(response) {
    console.log (response.data[0])
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "9f3o6449dc310bta33096fd85b205350";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  

  return (
    <div className="Dictionary"> 
    <form onSubmit={search}>
      <input type="Search" autoFocus={true} onChange={handleKeywordChange} />
      <input type="Submit" value="Look Up" className="btn w-100" />
    </form>
    </div>
  )
}