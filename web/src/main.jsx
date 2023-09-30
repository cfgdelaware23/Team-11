import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from "./routes/Landing";
import Register from "./routes/register";
// import Eligibility from "./routes/Eligibility";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
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
