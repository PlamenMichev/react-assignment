import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyDAKcwmjZLuubxWUs6eaB5zzNPb04NVdq0",
  authDomain: "react-assignment-5530e.firebaseapp.com",
  projectId: "react-assignment-5530e",
  storageBucket: "react-assignment-5530e.appspot.com",
  messagingSenderId: "601051718810",
  appId: "1:601051718810:web:f46d7be045c86f7e696b23"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
