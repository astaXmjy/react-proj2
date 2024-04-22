import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App1  from './App1';
// import StarRating from './starRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1/>
    {/* <StarRating maxRating={5}/>
    <StarRating maxRating={6} size={32} color='red'/>
    <StarRating maxRating={7} color='blue'/>
    <StarRating maxRating={8} color='purple'/>
    <StarRating maxRating={9} color='green'/>
    <StarRating maxRating={10} color='orangered'/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

