import Body from "../Body"
import {render} from "@testing-library/react"


global.fetch = jest.fn(()=>{
return Promise.resolve({
  json: ()=>{
    return Promise.resolve(data);

  }
})


})

it("should render the body componet with search", ()=>{
  render(<Body/>)

})