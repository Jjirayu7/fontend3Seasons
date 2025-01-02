import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter, RouterProvider 
} from 'react-router-dom';
import ProductMain from './pages/ProductMain.js';
import Home from './pages/Home.js';
import ProductInfo from './pages/ProductInfo.js';
import Cart from './pages/Cart.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/productMain',
  element: <ProductMain></ProductMain>
  },
  {
    path: 'productInfo',
    element: <ProductInfo></ProductInfo>
  },
  {
    path: '/cart',
    element: <Cart></Cart>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

reportWebVitals();
