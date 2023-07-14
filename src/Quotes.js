import React, { useState, useEffect } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    fetch("https://irianni-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error(error));
  }, []);

  function randomQuote() {
    fetch("https://irianni-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <span>{quotes.quote}</span>
      <span>{quotes.author}</span>
      <button onClick={randomQuote}>Get a new quote</button>
    </div>
  );
}

export default Quotes;
