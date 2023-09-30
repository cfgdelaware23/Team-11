import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from "./routes/Landing";
import Register from "./routes/register";
import Home from "./routes/Home";
import './index.css'
import Eligibility from './routes/Eligibility';
import SignIn from './routes/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/eligibility",
    element: <Eligibility />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
  path: "/home",
  element: <Home />,
},
{
  path: "/sign-in",
  element: <SignIn />,
},



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
