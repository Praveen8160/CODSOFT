import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
      <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rout} />
  </React.StrictMode>
);
