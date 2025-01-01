import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Restaurantmenu from './components/restaurantmenu';
import Usercontext from './utilities/Usercontext';
import { Provider } from 'react-redux';
import appStore from './utilities/appStore';
import Cart from './components/Cart';
// Correct import

// Main component
const AppLayout = () => {
  //authentication
  const[userName, setUserName]=useState();

useEffect(()=>{
  const data={
    name: "Vaishnavi Singh"
  }
  setUserName(data.name);
},[])

  return (
  <Provider store={appStore}>
    <Usercontext.Provider value= {{loggedInUser:userName,setUserName}}>
  <div className="app">
    <Header />
    <Outlet />
  </div>
  </Usercontext.Provider>
  </Provider>
  
  );
};

// Define routes using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{
      path: '/',
      element: <Body />
    }, {

      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    }, {
      path: '/restaurants/:resId',
      element: <Restaurantmenu />,
    },
    {
      path: '/cart',
      element: <Cart />,
    }

    ],
    errorElement: <Error />,  // This will show if there is an error (e.g., 404)
  }

]);

// Get root element and render the RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the RouterProvider with the defined routes
root.render(
  <RouterProvider router={appRouter} />
);
