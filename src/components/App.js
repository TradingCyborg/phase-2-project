import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import AllQuotes from './AllQuotes';
import AddQuote from './AddQuote';
import SingleQuote from './SingleQuote';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/all-quotes" exact component={AllQuotes} />
        <Route path="/add-quote" component={AddQuote} />
        <Route path="/quote/:id" component={SingleQuote} />   
      </Switch>
    </Router>
  );
}

export default App;
