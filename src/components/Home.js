import React, { useState, useEffect }from 'react';
import Navbar from './Navbar';
import axios from 'axios'


function Home() {
    const [quote, setQuote] = useState({});
  
    useEffect(() => {
      axios.get('https://type.fit/api/quotes')
        .then(response => {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          setQuote(response.data[randomIndex]);
        })
        .catch(error => console.error(error));
    }, []);


  function generateQuote(){
    axios.get('https://type.fit/api/quotes')
        .then(response => {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          setQuote(response.data[randomIndex]);
        })
        .catch(error => console.error(error));
     }

  
    return (
      <div class="main">
          <Navbar/>
         <div class="row justify-content-center mt-5">
           <div class="col-8">
          <div class="row justify-content-end mb-4 ml-4">
                 <button onClick={generateQuote} class="col-2 btn btn-primary btn-md">Generate Quote</button>
          </div>
                <div class="card" style={{width:"18rem;"}}>
          <div class="card-body">
            <h5 class="card-title">Random Quote:</h5>
            <p class="card-text">{quote.text}</p>
            <a href="#" class="card-link">{quote.author}</a>
          </div>
        </div>
        </div>
        
      </div></div>
    );
  }


 
  
  export default Home;