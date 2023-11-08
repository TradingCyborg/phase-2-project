import React, { useState } from 'react';
import axios from 'axios';

function AddQuote() {
  const [quoteText, setQuoteText] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new quote object
    const newQuote = {
      text: quoteText,
      author: author,
    };

    // Post the new quote to the JSON server
    axios.post('http://localhost:5000/quotes', newQuote)
      .then(response => {
        console.log('Quote added:', response.data);
        // Reset the form fields
        setQuoteText('');
        setAuthor('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Add a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Quote:</label>
          <input
            type="text"
            value={quoteText}
            onChange={e => setQuoteText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Quote</button>
      </form>
    </div>
  );
}

export default AddQuote;

