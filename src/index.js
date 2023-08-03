import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
// import About from './Components/About'
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

import userContext from "./Utils/useContext";

const About = lazy(() => import("./Components/About"));
const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [loggedinUser, setLoggedinUser] = useState();
  useEffect(() => {
    const data = {
      name: "Linton",
    };
    setLoggedinUser(data.name);
  }, []);

  return (
    <userContext.Provider value={{ loggedinUser, setLoggedinUser }}>
      <Header />
      <Outlet />
    </userContext.Provider>
  );
};

const CBR = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={CBR} />);
