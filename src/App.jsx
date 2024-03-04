import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import Categories from './pages/Categories/Categories';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  const router = createBrowserRouter([{
    path: '/',
    element:<Root/> ,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
      {
        path:'/categories',
        element:<Categories/>,
      },
      {
        path:'/products',
        element:<Products/>,
      },
      {
        path:'/signup',
        element:<Signup/>,
      },
      {
        path:'/login',
        element:<Login/>,
      },
      {
        path:'*',
        element:<NotFound/>,
      },
    ]
  }])
  return (
    <RouterProvider router={router} />
  )
}
