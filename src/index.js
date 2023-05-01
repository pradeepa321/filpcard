import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Routing from './Component/Routing/Routing';
import Product from './Component/Product/Product';
// import Camera from './Component/Camera/Camera';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Product />
  // <Camera />
    // <Routing />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
