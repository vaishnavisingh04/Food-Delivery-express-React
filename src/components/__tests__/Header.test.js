import {fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import appStore from "../../utilities/appStore"
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react";

it("Should render Header component ", ()=>{
render(
  <BrowserRouter>
<Provider store={appStore}>
  <Header/>
  </Provider>
  </BrowserRouter>

);

const loginbutton= screen.getByRole("button", {name:"Login"});

expect(loginbutton).toBeInTheDocument();



});


it("Should render header component with cartitems", ()=>{
  render(
    <BrowserRouter>
  <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
  
  );
  
  const cartItems= screen.getByText("Cart(0 items)");
  
  expect(cartItems).toBeInTheDocument();
  
  
  
  });

  it("Should change Login button to logout when clicked", ()=>{
    render(
      <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
      </Provider>
      </BrowserRouter>
    
    );
    
    const loginbutton= screen.getByRole("button" ,{name:"Login"});

    fireEvent.click(loginbutton);
    const logoutbutton= screen.getByRole("button" ,{name:"login"});
    
    expect(logoutbutton).toBeInTheDocument();
    
    
    
    });