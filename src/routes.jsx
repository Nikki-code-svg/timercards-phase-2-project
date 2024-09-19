import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LongTimer from "./LongTimer";
import Cards from "./Cards";
import App from "./App";
import NavBar from './NavBar';
import { Route, Routes, Navigate } from "react-router-dom";
import TimeList from "./TimeList";


// const routes = Route (


const routes = createBrowserRouter ([

      {
         path: "/",
         element: <App />

      },
    
      {
         path: "/LongTimer",
         element: <LongTimer />
      },
      {
         path: "/Cards/:id",
         element:<Cards />

      }
])

export default routes;

