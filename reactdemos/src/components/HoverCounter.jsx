import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
  render() {
    const {count,name, clickHandler} = this.props
    return (
      <div>
        <h2  onMouseOver={clickHandler}> {name} Clicked {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)