import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleQuote() {
  const { id } = useParams();
  const [quote, setQuote] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/quotes/${id}`)
      .then(response => {
        setQuote(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h2>Quote Details</h2>
      <p>Text: {quote.text}</p>
      <p>Author: {quote.author}</p>
    </div>
  );
}

export default SingleQuote;
