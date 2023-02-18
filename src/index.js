import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Error from "./component/error/error";
import HomeLayout from "./component/home/homeLayout.js";
import Login from "./component/login/login";
import Nav from "./component/nav/nav";
import SiginUp from "./component/SiginUp/SiginUp";
import './globals.scss';
const router = createBrowserRouter([

  {
    path: "/",
    element: <NavbarWrapper />,
    children: [

      {
        path: "/",
        element: (
          <HomeLayout />
        ),
      },
    ]
  },
  {
    path: "signup",
    element: <SiginUp />,
  },
  {
    path: "login",
    element: <Login />
  },

  {
    path: "/*",
    element: <Error />,
  }
]);



function NavbarWrapper() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
};


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);