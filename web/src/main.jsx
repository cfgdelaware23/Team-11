import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from "./routes/Landing";
import Register from "./routes/register";
import Eligibility from "./routes/Eligibility";

import Home from "./routes/Home";
import './index.css'
import Eligibility from './routes/Eligibility';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Eligibility />,
  },
  {
    path: "/eligibility",
    element: <Landing />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
