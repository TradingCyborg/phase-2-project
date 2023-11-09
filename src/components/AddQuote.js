import React, { useState } from 'react';
import Navbar from './Navbar';
import AllQuotes from './AllQuotes';
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
      <Navbar />
      <h1 className="text-center">Add Quote</h1>
      <h2>Add a Quote</h2>

      <form onSubmit={handleSubmit}>
        <div class="form-group mb-3">
          <label>Quote:</label>
          <input
            class="form-control"
            type="text"
            value={quoteText}
            onChange={e => setQuoteText(e.target.value)}
            required
          />
        </div>
        <div class="form-group mb-3">
          <label>Author:</label>
          <input
            class="form-control"
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
        </div>
        <button class="btn-primary btn-md btn" type="submit">Add Quote</button>
      </form>
    </div>
  );
}

export default AddQuote;

