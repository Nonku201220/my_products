import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
/* import Navbar from './Navbar'; */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     {/*  <Navbar /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

/* reportWebVitals();  */

//Fetch API requires a discussion of ...
//Callbacks, Promises, Thenables, and Async/Await

//Promises

//3 states: Pending, Resolved, Rejected

const products = fetch("https://dummyjson.com/product");

//pending 
console.log(products);

fetch("https://dummyjson.com/product")
    .then(response => {
        return response.json();

    })
    .then(data => {
        data.forEach(product => {
            console.log(product)
        })
    })