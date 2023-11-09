import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
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
      <Navbar/>

      <div class="container mt-5">
        <div class='row justify-content-end'>
          <div class='col-8'></div>
        <div class='col-4'>  <a href='/add-quote' class="btn-md mb-4 btn-primary btn">Add Quote</a></div></div>
      <h2 class="mb-3">All Quotes</h2>
      <ul class="list-group">
    
        {quotes.map(quote => (
            <li key={quote.id} class="list-group-item">

            <div class="card" style={{width:"18rem;"}}>
              <div class="card-body">
                <h5 class="card-title">Random Quote:</h5>
                <p class="card-text">{quote.text}</p>
                <a href="#" class="card-link">{quote.author}</a>
              </div>
            </div>
            </li>
        ))}
      </ul>
    </div>

    </div>
    
  );
}

export default AllQuotes;
