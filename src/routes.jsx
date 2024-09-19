import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LongTimer from "./LongTimer";
import Cards from "./Cards";
import App from "./App";


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

