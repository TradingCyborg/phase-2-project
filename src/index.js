import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

function fetchAndDisplayQuotes() {
  const url = 'https://type.fit/api/quotes';
  
   fetch(url)
      .then((response) => {
          console.log(response)
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data) => {
          displayQuotes(data);
      })
      .catch((error) => {
          console.error('Error fetching quotes:', error);
      });
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
