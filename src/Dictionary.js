import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [phonetic, setPhonetic] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data.meanings[0]);
    setPhonetic(response.data.phonetic);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "9f3o6449dc310bta33096fd85b205350";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <h4>What word do you want to look up?</h4>
      <form onSubmit={search}>
        <input
          type="Search"
          className="search"
          autofocus={true}
          onChange={handleKeywordChange}
        />
        <input
          type="Submit"
          value="Look Up"
          className="btn w-100 submit"
          readOnly
        />
      </form>
      <div className="hint">Suggested words: Sunset, Car, Book...</div>
      <Results results={results} phonetic={phonetic} />
    </div>
  );
}
