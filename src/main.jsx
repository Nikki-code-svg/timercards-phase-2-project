import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import routes from './routes.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}/>);

