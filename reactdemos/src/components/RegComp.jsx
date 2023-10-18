import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("****Regular Component******")

    return (
      <>
       <h2>Regular Component  {this.props.name} </h2>
      </>
    )
  }
}

export default RegComp