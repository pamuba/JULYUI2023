import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

export class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "apples"
    }
  }
  componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:"apples"
        })
    }, 2000)
  }
  render() {
    console.log("********************Parent Component*****************************")
    return (
      <>
         <h2>Parent Component</h2>
         <h2><RegComp name={this.state.name}></RegComp></h2>
         <h2><PureComp name={this.state.name}></PureComp></h2>
      </>
    )
  }
}

export default ParentComp