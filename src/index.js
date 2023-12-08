import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import Project from "./components/Project";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/portfolio-react" element={<App />}>
      <Route path="/portfolio-react" element={<Hero />} />
      <Route path="/portfolio-react/Projects" element={<Project />} />
      <Route path="/portfolio-react/Contact" element={<Contact />} />
      
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);