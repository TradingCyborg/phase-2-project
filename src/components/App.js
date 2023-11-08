import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllQuotes from './AllQuotes';
import AddQuote from './AddQuote';
import SingleQuote from './SingleQuote';


function App() {
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
