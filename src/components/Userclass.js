import React from "react";

class Userclass extends React.Component{
constructor(props){
  super(props)
}
  render() {
    return(
      <div className="user-card">
      <h1>{this.props.name}</h1>
      <h2>location: Ayodhya</h2>
      <h2>contact:-708133xxxx</h2>



    </div>
    )

    
  }
}

export default Userclass;