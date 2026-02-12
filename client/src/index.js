import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Services from './views/Services/Services';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Dashboard from './views/Dashboard/Dashboard';
import BookAppointment from './views/BookAppointment/BookAppointment';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter ([
  {
   path: '/',
   element: <Home />
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/services',
    element: <Services/>
  },
  {
    path: '/bookAppointment',
    element: <BookAppointment/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
])

root.render(
 <RouterProvider router = {router}/>
);



