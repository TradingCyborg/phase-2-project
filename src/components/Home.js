import React, { useState, useEffect }from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';


function Home() {
    const [quote, setQuote] = useState({});
  
    useEffect(() => {
      axios.get('http://localhost:3000/quotes')
        .then(response => {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          setQuote(response.data[randomIndex]);
        })
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div class="row justify-content-center mt-5">
        <div class="col-8">
                
                <div class="card" style={{width:"18rem;"}}>
          <div class="card-body">
            <h5 class="card-title">Random Quote:</h5>
            <p class="card-text">{quote.text}</p>
            <a href="#" class="card-link">{quote.author}</a>
          </div>
        </div>
        </div>
        
      </div>
    );
  }


 
  
  export default Home;