import React, { Component } from 'react'

export class Message extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        message:"Welcome the State Demo",
        info:"The Info State variable"
    }
  }
  changeMessage(){
    // this.state.message = "new value"
    this.setState({
        message: "Welcome to React"
    })
  }
  render() {
    return (
      <>
            <h1>{this.state.message}  {this.state.info}</h1>
            <button onClick={()=>{this.changeMessage()}}>CHANGE</button>
      </>
    )
  }
}

export default Message