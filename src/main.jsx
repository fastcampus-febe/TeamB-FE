import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/Common/NotFound';
import Detail from './pages/Detail';
import Wish from './pages/Wish';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/detail/:tourId', element: <Detail /> },
      { path: '/wish', element: <Wish /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
