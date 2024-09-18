import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import routes from './routes.jsx'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  
  <BrowserRouter router={routes}>
    <App />
   
  </BrowserRouter>
)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={routes}/>);

