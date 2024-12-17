import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // Correct import

// Main component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Define routes using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,  // This will show if there is an error (e.g., 404)
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

// Get root element and render the RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the RouterProvider with the defined routes
root.render(
  <RouterProvider router={appRouter} />
);
