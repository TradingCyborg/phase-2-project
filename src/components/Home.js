import React, { useState, useEffect }from 'react';
import axios from 'axios'

function Home() {
    const [quote, setQuote] = useState({});
  
    useEffect(() => {
      axios.get('http://localhost:5000/quotes')
        .then(response => {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          setQuote(response.data[randomIndex]);
        })
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        <h2>Random Quote:</h2>
        <p>{quote.text}</p>
        <p>Author: {quote.author}</p>
      </div>
    );
  }
  
  export default Home;