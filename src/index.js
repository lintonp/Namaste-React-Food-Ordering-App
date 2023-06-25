import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import RestaurantMenu from './Components/RestaurantMenu'

const AppLayout = () => { 
  return (
    <>
      <Header />
      <Outlet />
    </> 
  );
}

const CBR = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      }, 
      {
        path: '/about',
        element: <About />
      }, 
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:resID',
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={CBR} />);