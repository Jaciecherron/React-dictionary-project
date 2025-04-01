import React from 'react';
import './App.css';
import booklogo from "./booklogo.png"
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={booklogo} className="App-logo" alt="logo" />
          Dictionary APP
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            This project was codded by{" "}
            <a
              href="https://github.com/Jaciecherron"
              target="_blank"
              rel="noreferrer"
            >
              Jacie Spivey{" "}
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://dainty-granita-d17123.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
