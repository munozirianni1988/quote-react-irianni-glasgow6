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
      <div>
        <span>{quotes.quote}</span>
      </div>
      <div>
        <span>{quotes.author}</span>
      </div>
      <div>
        <button onClick={randomQuote}>Get a new quote</button>
      </div>
    </div>
  );
}

export default Quotes;
