import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

function Quotes() {
  const [quote, setQuote] = useState({});
  const [searchedQuotes, setSearchedQuotes] = useState([]);

  const quotesToShow = searchedQuotes.length ? searchedQuotes : [quote];

  useEffect(() => {
    randomQuote();
  }, []);

  function randomQuote() {
    fetch("https://irianni-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => console.error(error));
  }

  function search(searchedString) {
    if (searchedString) {
      fetch(
        `https://irianni-quote-server.glitch.me/quotes/search?word=${searchedString}`
      )
        .then((response) => response.json())
        .then((data) => setSearchedQuotes(data))
        .catch((error) => console.error(error));
    } else {
      setSearchedQuotes([]);
      randomQuote();
    }
  }

  return (
    <div className="container">
      <SearchBar search={search} />
      {quotesToShow.map((quote, index, id) => (
        <div>
          <div>
            <span key={index}>{quote.quote}</span>
          </div>
          <div>
            <span key={id}>{quote.author}</span>
          </div>
        </div>
      ))}

      <div>
        <button onClick={randomQuote}>Get a new quote</button>
      </div>
    </div>
  );
}

export default Quotes;
