import { render } from "@testing-library/react";
import Contact from "../Contact";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("", ()=>{

  it("the component should render", ()=>{
    render(<Contact/>);
    
    const heading= screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
    
    });
    
    test("the component should render", ()=>{
      render(<Contact/>);
      
      const button= screen.getByRole("button");
      
      expect(button).toBeInTheDocument();
      
      });
    
      test("the component should hve 2 input box ", ()=>{
        render(<Contact/>);
        
        const textbox= screen.getAllByRole("textbox");
        
        
        
        });

})
