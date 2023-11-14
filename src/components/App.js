import React, { useState, useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllQuotes from './AllQuotes';
import AddQuote from './AddQuote';
import SingleQuote from './SingleQuote';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const url = "https://type.fit/api/quotes";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
    .then((res) => res.json())
    .then((d) => setData(d))
  }
  useEffect(()=>{fetchInfo()},[])
  
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/all-quotes" element={<AllQuotes/>} />
        <Route path="/add-quote" element={<AddQuote/>} />
        <Route path="/quote/:id" element={<SingleQuote/>} />   
        </Routes>
    </Router>
  );
}

export default App;
