import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/quotes')
      .then(response => {
        setQuotes(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Quotes</h2>
      <ul>
        {quotes.map(quote => (
          <li key={quote.id}>
            <p>{quote.text}</p>
            <p>Author: {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllQuotes;
