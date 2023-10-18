import React, { Component } from 'react'

export class EventBind extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      message: "Hello"
   }
   this.handlers = this.handlers.bind(this)
 }
 handlers(){
    this.setState({
        message:"New Message"
    })
    // console.log(this)

 }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.handlers}>Change</button>
      </div>
    )
  }
}

export default EventBind