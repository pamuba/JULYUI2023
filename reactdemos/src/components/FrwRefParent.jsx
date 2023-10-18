import React, { Component } from 'react'
import FrwRef from './FrwRef'

export class FrwRefParent extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <FrwRef  ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FrwRefParent