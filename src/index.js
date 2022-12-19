import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1NsFax5NJDdlmz66MsutvjSTm3sFKT9s",
  authDomain: "ecommercereact-c9de0.firebaseapp.com",
  projectId: "ecommercereact-c9de0",
  storageBucket: "ecommercereact-c9de0.appspot.com",
  messagingSenderId: "125805907201",
  appId: "1:125805907201:web:b08e3eb0c73a0b17df9f00"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
