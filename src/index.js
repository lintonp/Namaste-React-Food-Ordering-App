import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './Components/Header';
import Body from './Components/Body';
// import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import RestaurantMenu from './Components/RestaurantMenu'

const About = lazy(() => import('./Components/About'));
const Grocery = lazy(()=> import('./Components/Grocery'))

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
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      }, 
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
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