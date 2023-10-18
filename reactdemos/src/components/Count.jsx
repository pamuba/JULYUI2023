import React, { Component } from 'react'

export class Count extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  incrementCount(){
    // this.setState({count : this.state.count + 1}
    // , ()=>{console.log("Callback:",this.state.count)})
    // console.log(this.state.count)

    this.setState((prevState, props)=>({
        count: prevState.count + 1
    }))
  }
  incrementFive(){
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
  }
  render() {
    return (
      <>
        <div>Count = {this.state.count}</div>
        <button onClick={()=>{this.incrementCount()}}>Increment</button>
        <button onClick={()=>{this.incrementFive()}}>Increment 5</button>
      </>
      
    )
  }
}

export default Count