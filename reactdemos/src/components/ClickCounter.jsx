import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {
  render() {
    const {count,name, clickHandler} = this.props
    return (
      <div>
        <button  onClick={clickHandler}>{name} Clicked {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)